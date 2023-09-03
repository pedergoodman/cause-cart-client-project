const dbx = require('../modules/dropbox');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { Query } = require('pg');



// *** create Vendor folder 
// *** save folder_id, folder_path, and shared link to database
router.post('/folder/:userId', async (req, res) => {

  // TODO bring in unique vendor folder name
  const { vendorFolderName } = req.body
  const { userId } = req.params
  let sharedFolderLink;

  // *** START requests
  try {
    // *** create new vendor folder in Dropbox
    const newVendorFolder = await dbx
      .filesCreateFolderV2({
        path: `/vendor-submitted-onboarding-docs/${vendorFolderName}`, // TODO: folder name is based on vendor details
        autorename: true,
      })

    // data needed from shared folder result
    const folderPath = newVendorFolder.result.metadata.path_lower
    const folderId = newVendorFolder.result.metadata.id


    // *** create new shared dropbox link based on created folder path
    // check if a shared link exists
    const checkForSharedLink = await dbx.sharingListSharedLinks({
      path: folderPath
    });

    // * check if a shared link exists
    if (checkForSharedLink.result.links[0]) {
      // if a share link exists, set the link to a variable
      sharedFolderLink = checkForSharedLink.result.links[0].url

    } else {
      // if a shared link does not exist, create new shared link from provided path
      const createNewSharedLink =
        await dbx.sharingCreateSharedLinkWithSettings({
          path: folderPath
        });

      // set shared link to shared link
      sharedFolderLink = createNewSharedLink.result.url
    }



    
    



    res.sendStatus(200)
    // ! do not need to send result, this is just for testing the response
    console.log('userId is:', userId);
    console.log('folderPath is:', folderPath);
    console.log('folderId is:', folderId);
    console.log('sharedFolderLink is:', sharedFolderLink);



    // res.send(queryItems)








  } catch (error) {
    console.error('error creating vendor folder:', error);
  }
});








// TODO -- upload one or more files to vendor's dropbox
router.post('/upload/:userId', rejectUnauthenticated, async (req, res) => {



});

// TODO -- grab all the files in a vendors folder
router.post('/files/:userId', rejectUnauthenticated, async (req, res) => {



});













module.exports = router;