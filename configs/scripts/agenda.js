/*

Agenda：https://apps.apple.com/app/id1370289240

[rewrite_local]
^https?:\/\/accounts\.agenda\.com\/users url script-response-body https://raw.githubusercontent.com/loganteo/qx-configs/main/config/scriptsagenda.js

[MITM]
hostname = accounts.agenda.com

*/
var result = $response.body;
result = JSON.parse(result);
result.unlockExpiryMobile = 148204937166;
result.licenseStatusMobile = 2;
result.licenseStatus = 2;
result.informUserOfPendingBonus = false;
result.hasLifetimeUnlock = false;
result.freeTrialStatus = 1;
result.isSubscribed = true;
result.unlockExpiry = 148204937166;
result.isSubscribedMobile = true;
result.error = 0;
result.universalPurchaseAvailable = false;
result = JSON.stringify(result);
$done({ body: result });
