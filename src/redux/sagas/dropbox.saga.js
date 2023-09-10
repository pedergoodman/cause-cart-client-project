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

  const { dropboxFolderPath, files } = action.payload
  try {

    const formData = new FormData()

    for (const file of files) {
      // console.log('file is ',file);
      formData.append("image", file)
    }

    formData.append("dropboxFolderPath", dropboxFolderPath)
    

    yield axios.post('/api/dropbox/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' }, })

  } catch (error) {
    console.log("in dropbox saga, error making upload request", error);
  }

}


function* fetchVendorDropboxFiles(action) {
  try {
    yield put({type: 'SET_DBX_LOADING_ACTIVE'})
    
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

    yield put({type: 'SET_DBX_LOADING_INACTIVE'})
    
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
  yield takeLatest("FETCH_VENDOR_DROPBOX_FILES", fetchVendorDropboxFiles);
}

export default dropboxSaga;
