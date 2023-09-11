const dbx = require('../modules/dropbox');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const fs = require('fs');
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const { Query } = require('pg');

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })




// *** create Vendor folder 
// save folder_id, folder_path, and shared link to database
router.post('/folder/:vendorId', async (req, res) => {

  const { vendorName } = req.body
  const { vendorId } = req.params

  let sharedFolderLink;

  // ** START requests
  try {
    // ** create new vendor folder in Dropbox
    const newVendorFolder = await dbx
      .filesCreateFolderV2({
        path: `/vendor-submitted-onboarding-docs/${vendorName} Documents`,
        autorename: true,
      })

    // data needed from shared folder result
    const folderPath = newVendorFolder.result.metadata.path_display
    const folderId = newVendorFolder.result.metadata.id

    // *** create new shared dropbox link based on created folder path
    // * check if a shared link exists
    const checkForSharedLink = await dbx.sharingListSharedLinks({
      path: folderPath
    });

    // * check if a shared link exists or create one if it doesn't
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
      WHERE "id" = $4
    `;

    queryItems = [folderId, folderPath, sharedFolderLink, vendorId]

    // * sends to database
    await pool.query(queryText, queryItems)

    res.sendStatus(201)

  } catch (error) {
    console.error('error creating vendor folder:', error);
    res.sendStatus(500)
  }
});



// **** upload one or more files to vendor's dropbox
router.post('/upload', rejectUnauthenticated, upload.array('image'), async (req, res) => {

  const files = req.files
  const dropboxFolderPath = req.body.dropboxFolderPath

  try {
    // handling multiple file uploads with a simple for loop
    await Promise.all(files.map(file => {
      // handle single file upload to vendor folder
      return dbx
        .filesUpload({
          contents: file.buffer,
          path: `${dropboxFolderPath}/${file.originalname}`, // folder path + file name = file path
          mode: "add",
          autorename: true,
          mute: false,
          strict_conflict: false,
        }).then((result) => {
          console.log('file uploaded:', file);
        }).catch((err) => {

          console.log('error uploading file:', err);
        });
    }))

    res.sendStatus(201)
  } catch (error) {
    console.error('error uploading file(s) to Dropbox', error);
    res.sendStatus(500)
  }
});



// **** grab all the files in a vendors folder with a shared link
router.post('/files', async (req, res) => {
  // variables needed
  const { dropboxFolderPath, } = req.body

  const arrayOfFolderItems = [];

  try {
    // Grab list of files in a vendor folder
    let filesInDropboxFolder;
    const folderListResult = await dbx.filesListFolder({ path: dropboxFolderPath })
    filesInDropboxFolder = folderListResult.result.entries;


    // * Loop through files and get shared links
    await Promise.all(filesInDropboxFolder.map(async file => {
      // handle single file upload to vendor folder
      const filePath = file.path_lower
      let sharedFileLink;

      // check if a shared link exists or create one if it doesn't
      const checkForSharedLink = await dbx.sharingListSharedLinks({
        path: filePath
      });

      if (checkForSharedLink.result.links[0]) { // a share link exists, set the link to a variable
        sharedFileLink = checkForSharedLink.result.links[0]
        arrayOfFolderItems.push(sharedFileLink)
      } else {  // create new shared link from provided path
        const createNewSharedLink =
          await dbx.sharingCreateSharedLinkWithSettings({
            path: filePath
          });
        // set shared link to shared link
        sharedFileLink = createNewSharedLink.result
        arrayOfFolderItems.push(sharedFileLink)
      }
    })) // end promise loop

    res.send(arrayOfFolderItems)
  } catch (error) {
    console.error('error getting entries', error);
    res.sendStatus(500)
  }
});




module.exports = router;