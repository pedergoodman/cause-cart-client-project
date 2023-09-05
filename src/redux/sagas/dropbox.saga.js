import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* createVendorFolder(action) {
  try {
    // TODO: send name data to create vendor folder
    // todo need NAME & ID
  } catch (error) {
    console.log('in dropbox saga, error making vendor folder request', error);
  }
}



function* uploadDropboxFile(action) {
  try {
    // TODO: send files data to upload
    // todo need PATH & ID
  } catch (error) {
    console.log('in dropbox saga, error making upload request', error);
  }
}



function* downloadDropboxFile(action) {
  try {
    // TODO: send request to grab download data
    // TODO: trigger download.. here? or do you store it?
  } catch (error) {
    console.log('in dropbox saga, error making download request', error);
  }
}



function* fetchVendorDropboxFiles(action) {


  try {

    // ! TEST FOLDER PATH
    const dropboxFolderPath = "/vendor-submitted-onboarding-docs/test-client-file"

    // selected vendor folder path
    // const dropboxFolderPath = action.payload

    // axios request to fetch vendor files
    const result = yield axios.post('/api/dropbox/files', { dropboxFolderPath })

    // put request to save result in store
    yield put({
      type: "SET_VENDOR_DROPBOX_FILES",
      payload: result
    })



  } catch (error) {
    console.log('in dropbox saga, error making fetch vendor files request', error);
  }
}




function* dropboxSaga() {
  yield takeLatest('CREATE_VENDOR_FOLDER', createVendorFolder);
  yield takeLatest('UPLOAD_FILE_TO_DROPBOX', uploadDropboxFile);
  yield takeLatest('DOWNLOAD_DROPBOX_FILE', downloadDropboxFile);
  yield takeLatest('FETCH_VENDOR_DROPBOX_FILES', fetchVendorDropboxFiles);
}

export default dropboxSaga;