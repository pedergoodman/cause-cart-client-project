import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* createVendorFolder(action) {
  try {
    
  } catch (error) {
    console.log('in dropbox saga, error making vendor folder request', error);
  }
}



function* uploadDropboxFile(action) {
  try {
    
  } catch (error) {
    console.log('in dropbox saga, error making upload request', error);
  }
}



function* downloadDropboxFile(action) {
  try {
    
  } catch (error) {
    console.log('in dropbox saga, error making download request', error);
  }
}



function* fetchVendorDropboxFiles(action) {
  try {
    
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