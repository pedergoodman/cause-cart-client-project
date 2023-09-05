const dbx = require('../modules/dropbox');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { Query } = require('pg');



// *** create Vendor folder 
// save folder_id, folder_path, and shared link to database
router.post('/folder/:userId', async (req, res) => {

  // TODO bring in unique vendor folder name
  const { vendorFolderName } = req.body
  const { userId } = req.params
  let sharedFolderLink;

  // ** START requests
  try {
    // ** create new vendor folder in Dropbox
    const newVendorFolder = await dbx
      .filesCreateFolderV2({
        path: `/vendor-submitted-onboarding-docs/${vendorFolderName}`, // TODO: folder name is based on vendor details
        autorename: true,
      })

    // data needed from shared folder result
    const folderPath = newVendorFolder.result.metadata.path_lower
    const folderId = newVendorFolder.result.metadata.id

    // *** create new shared dropbox link based on created folder path
    // * check if a shared link exists
    const checkForSharedLink = await dbx.sharingListSharedLinks({
      path: folderPath
    });

    // * check if a shared link exists
    if (checkForSharedLink.result.links[0]) {
      // if a share link exists, set the link to a variable
      sharedFolderLink = checkForSharedLink.result.links[0].url

    } else {
      // if a shared link does not exist, 
      // * create new shared link from provided path
      const createNewSharedLink =
        await dbx.sharingCreateSharedLinkWithSettings({
          path: folderPath
        });

      // set shared link to shared link
      sharedFolderLink = createNewSharedLink.result.url
    }


    // *** add dropbox references to database
    queryText = `
      UPDATE "vendor_app_info"
      SET
        "dropbox_folder_id" = $1,
        "dropbox_folder_path" = $2,
        "dropbox_shared_link" = $3 
      WHERE "user_id" = $4
    `;

    queryItems = [folderId, folderPath, sharedFolderLink, userId]

    // * sends to database
    await pool.query(queryText, queryItems)

    // send created status
    res.sendStatus(201)

  } catch (error) {
    console.error('error creating vendor folder:', error);
  }
});





// TODO - test this route
// **** upload one or more files to vendor's dropbox
router.post('/upload/:userId', rejectUnauthenticated, async (req, res) => {
  // ? TODO - this should only be called from a users account
  // ! remove userId from route IF using req.user
  // const userId = req?.user?.id;

  // array of file objects
  const { files, dropbox_folder_path } = req.body

  console.log("createdFolderPath is:", createdFolderPath);
  console.log("files added is:", files);
  // console.log("files added is:", files[0].name);
  // console.log("files added is:", files[1].name);
  try {

    // handling multiple file uploads with a simple for loop
    await Promise.all(files.map(file => {
      // handle single file upload to vendor folder
      return dbx
        .filesUpload({
          contents: file,
          path: `${dropbox_folder_path}${file.name}`, // TODO: make this accept a vendors folder path
          mode: "add",
          autorename: true,
          mute: false,
          strict_conflict: false,
        })
    }))

    // send status created
    res.sendStatus(201)
  } catch (error) {
    console.error('error uploading file(s) to Dropbox', error);
  }
});



// TODO - test this route
// **** download selected file from a vendor folder
router.post('/download', (req, res) => {
  // variables needed
  const { filePathToDownload } = req.body

  console.log('filePathToDownload is:', filePathToDownload);

  dbx.filesDownload({
    // ! TEST download path
    // path: "/vendor-submitted-onboarding-docs/test-client-file/product set up basic generic.xlsx",
    // ! SWAP for variable download path
    path: filePathToDownload
  }).then((response) => {
    // const fileName = response.result.name;
    // const blob = response.result.fileBlob;

    // send file with info and blob
    res.send(response)
  }).catch((err) => {
    console.log('error downloading file', err);
  });
});





// **** grab all the files in a vendors folder
router.post('/files/', async (req, res) => {
  // variables needed
  const { dropboxFolderPath, } = req.body

  dbx
    .filesListFolder({
      path: dropboxFolderPath,
    })
    .then(function (response) {
      console.log(response);
      filesInDropboxFolder = response.result.entries;
      res.send(filesInDropboxFolder)
    })
    .catch(function (error) {
      console.error(error);
    });

});







module.exports = router;