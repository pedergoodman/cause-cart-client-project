const dropboxV2Api = require('dropbox-v2-api');

// create session ref:
const dropbox = dropboxV2Api.authenticate({
    token: 'sl.Bk9fG-KcF1DguvGqKcoIcMRG4l7OcS3Yw2-DswBqLPIoTwsLB-S1Zcplr04mZ_EYeAfAF9_Fz8Ykd2wR1l1LgxOYe45KcT44vJrj46FgKK_cRbu8Wlhx6FXQbnU10431lwMXy1JeTGmL'
});

// use session ref to call API, i.e.:
dropbox({
    resource: 'users/get_account',
    parameters: {
        'account_id': '"dbid:AAA-iF2A0GBCEwestcaG5Q4vS5EfTSdUYVs"'
    }
}, (err, result, response) => {
    if (err) { return console.log(err); }
    console.log(result);
});


