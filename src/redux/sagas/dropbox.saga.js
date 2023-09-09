import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { saveAs } from "file-saver";

function* createVendorFolder(action) {
  const vendorId = action.payload.vendorId
  const vendorName = action.payload.vendorName
  
  try { 
    console.log('in dropbox saga, action.payload is:', action.payload);
    // send name data to create vendor folder
    yield axios.post(`/api/dropbox/folder/${vendorId}`, action.payload);

  } catch (error) {
    console.log("in dropbox saga, error making vendor folder request", error);
  }
}

function* uploadDropboxFile(action) {

  const {dropboxFolderPath, files } = action.payload
  // console.log('in upload saga', action.payload);

  console.log("in saga dropboxFolderPath is", dropboxFolderPath);
  console.log("in saga files is", files);


  try {
    // TODO: send files data to upload

    const formData = new FormData()
    formData.append("image", files[0])
    formData.append("dropboxFolderPath", dropboxFolderPath)
  


    const result = yield axios.post('/api/dropbox/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}, })
  




    
  } catch (error) {
    console.log("in dropbox saga, error making upload request", error);
  }
}

function* downloadDropboxFile(action) {
  try {
    const filePathToDownload = action.payload;

    // console.log("filePathToDownload is:", filePathToDownload);

    // TODO: send request to grab download data
    const downloadResult = yield axios.post("/api/dropbox/download", {
      filePathToDownload,
    });

    // console.log("in dropboxSaga, downloadResult is:", downloadResult);

    // ! working on file blobs here!
    const fileName = downloadResult.data.result.name;

    const fileBinary = downloadResult.data.result.fileBinary

    // console.log('in dropboxSaga, fileBinary is:', fileBinary);
    // const newFileBlob = new Blob(fileBinary, fileName);
    // console.log('in dropbox saga, array buffer is:', arrayBufferToBinaryString(fileBinary))


    // var blob = new Blob(newFileBlob);

    // console.log('in dropboxSaga, fileName is:', fileName);
    // console.log('in dropboxSaga, blob is:', blob);
    // console.log('in dropboxSaga, newFileBlob is:', newFileBlob);

    // TODO: trigger download.. here? or do you store it?

    // yield saveAs(newFileBlob, fileName)
  } catch (error) {
    console.log("in dropbox saga, error making download request", error);
  }
}

function* fetchVendorDropboxFiles(action) {
  try {

    // selected vendor folder path
    const dropboxFolderPath = action.payload

    // axios request to fetch vendor files
    const result = yield axios.post("/api/dropbox/files", {
      dropboxFolderPath,
    });

    // put request to save result in store
    yield put({
      type: "SET_VENDOR_DROPBOX_FILES",
      payload: result,
    });
  } catch (error) {
    console.log(
      "in dropbox saga, error making fetch vendor files request",
      error
    );
  }
}

function* dropboxSaga() {
  yield takeLatest("CREATE_VENDOR_FOLDER", createVendorFolder);
  yield takeLatest("UPLOAD_FILE_TO_DROPBOX", uploadDropboxFile);
  yield takeLatest("DOWNLOAD_DROPBOX_FILE", downloadDropboxFile);
  yield takeLatest("FETCH_VENDOR_DROPBOX_FILES", fetchVendorDropboxFiles);
}

export default dropboxSaga;
