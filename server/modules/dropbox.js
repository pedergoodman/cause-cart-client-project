const { Dropbox } = require('dropbox');
require('dotenv').config();


// from sandbox
const dbx = new Dropbox({
    accessToken: "sl.Bld3GejyuTLm3aSoKItaegLqvwD6X7TUJhh8kaf1p418QCdTYJRjIoVD6SUwN_d1wOKPFkECeo1x8Pjg8EsWbPWgPIUIp8J9gdH9QUJ3THQyqNEaHQRDR22JIW-krNvmBRau3KmgwjO_-5A"
}); // Replace with your access token





// // create session ref:
// const dropbox = Dropbox.authenticate({
//     token: 'sl.Bk9fG-KcF1DguvGqKcoIcMRG4l7OcS3Yw2-DswBqLPIoTwsLB-S1Zcplr04mZ_EYeAfAF9_Fz8Ykd2wR1l1LgxOYe45KcT44vJrj46FgKK_cRbu8Wlhx6FXQbnU10431lwMXy1JeTGmL'
// });

// const APP_KEY = "yi1sy5me2a49729"; // Replace with your Dropbox app key
// const DROPBOX_SECRET = "v33nvhfsgjwrs9q";
// const CLIENT_ID = "dbid:AAA-iF2A0GBCEwestcaG5Q4vS5EfTSdUYVs";
// const redirect_uri = 'http://localhost:3000/auth'



module.exports = dbx;