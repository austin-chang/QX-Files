/*

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/loganteo/Script/main/APPheji_Revenuecat.js
//^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/loganteo/Script/main/APPheji_Revenuecat.js

[MITM]
hostname = api.revenuecat.com

*/
const result = {};
const altResult = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  result.headers = $request.headers;
} else if (altResult && altResult.subscriber) {
  altResult.subscriber.subscriptions = altResult.subscriber.subscriptions || {};
  altResult.subscriber.entitlements = altResult.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = 'gd';
  const UAMappings = {
    'Bolt':{ name: 'membership', id: 'com.circles.fin.premium.yearly'},
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus'},
    'Decision':{ name: 'com.nixwang.decision.entitlements.pro', id: 'com.nixwang.decision.pro'},
    'Drops':{ name: 'premium', id: 'premium_yearly_full_price_tier_c_free_trial_7_int'},
    'Hevy':{ name: 'hevy-pro', id: 'hevypro_1month_tier3'},
    'Pillow':{ name: 'premium', id: 'com.neybox.pillow.premium.year.specialoffer'},
    'Spark':{ name: 'premium', id: 'spark_5999_1y_1w0'},
    'VSCO':{ name: 'pro', id: 'vscopro_global_5999_annual_AutoFreeTrial'},
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-06-06T06:06:06Z",
    "purchase_date": "2023-06-06T06:06:06Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      altResult.subscriber.subscriptions = {};
      altResult.subscriber.subscriptions[id] = data;
      altResult.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      altResult.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  result.body = JSON.stringify(altResult);
}
$done(result);
