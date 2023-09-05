const { Dropbox } = require('dropbox');
require('dotenv').config();


// from sandbox
const dbx = new Dropbox({
    accessToken: "sl.BlcSsN_DDEpvHhMjFi76OpJIMh4i_QHXty8Z7yTrUjEAhT6nqoFNufpW43zvgM4oNB40GBFP5CBUcqH9_O6rQglKHuOrNdoDi0KCd96HRynNZLn-aQkgy9R6rHdzRf2i19s290gzpk3QQ04"
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