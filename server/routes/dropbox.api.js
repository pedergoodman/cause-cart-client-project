const dbx = require('../modules/dropbox');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');




// TODO -- create Vendor folder 
// save folder_id, folder_path, and shared link to database
router.post('/new-folder/', (req, res) => {
// need





});



// TODO -- upload one or more files to vendor's dropbox
router.post('/', (req, res) => {
  // GET route code here


});

// TODO -- grab all the files in a vendors folder
router.post('/', (req, res) => {
  // GET route code here
  dbx
  .filesListFolder({
    path: "/vendor-submitted-onboarding-docs/test-client-file", // TODO: make this accept a vendors folder path
  })
  .then(function (response) {
    console.log(response);
    filesInDropboxFolder = response.result.entries;
  })
  .catch(function (error) {
    console.error(error);
  });

});













module.exports = router;