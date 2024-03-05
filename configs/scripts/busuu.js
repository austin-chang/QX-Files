/*

Busuu: https://apps.apple.com/app/id379968583

[rewrite_local]
^https?:\/\/api\.(busuu|boshu)\.(com|cn)\/users\/me url script-response-body https://raw.githubusercontent.com/loganteo/Script/main/busuu.js

[MITM]
hostname = api.busuu.com

*/
var result = JSON.parse($response.body);
result.data.access = {"tier": "plus"};
$done({ body: JSON.stringify(result) });
