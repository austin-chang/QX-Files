/*
[rewrite_local]
^https:\/\/api\.getmimo\.com\/v1\/subscriptions$ url script-response-body https://raw.githubusercontent.com/doomnor/qx-configs/master/configs/scripts/mimo.js

[mitm]
hostname = api.getmimo.com
*/

var obj = JSON.parse($response.body);

obj= {
  "source": "ios",
  "status": "active",
  "interval": "yearly",
  "billingInfo": {
    "currency": "USD",
    "nextBillingPrice": 59.98999999999999
  },
  "subscriptions": [
    {
      "source": "ios",
      "status": "active",
      "interval": "yearly",
      "billingInfo": {
        "currency": "USD",
        "nextBillingPrice": 59.98999999999999
      },
      "intervalCount": 1,
      "activeUntil": "2099-10-10T08:04:21+00:00",
      "createdAt": "2019-10-03T08:04:21+00:00",
      "clientSecret": "",
      "isActive": true
    }
  ],
  "intervalCount": 1,
  "activeUntil": "2099-10-10T08:04:21+00:00",
  "createdAt": "2019-10-03T08:04:21+00:00",
  "clientSecret": "",
  "isActive": true
};

$done({body: JSON.stringify(obj)});