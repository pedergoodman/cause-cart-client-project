import { combineReducers } from 'redux';



const dropboxVendorFiles = (state = [], action) => {
  switch (action.type) {
    case "SET_VENDOR_DROPBOX_FILES":
      return action.payload;
    default:
      return state;
  }
};
// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default dropboxVendorFiles;
