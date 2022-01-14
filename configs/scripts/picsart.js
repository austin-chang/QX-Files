/*
[rewrite_local]
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/doomnor/qx-configs/master/configs/scripts/picsart.js

[mitm]
hostname = api.picsart.c*
*/

var obj = JSON.parse($response.body);

obj.subscription= {
  "granted": true
};
$done({body: JSON.stringify(obj)});