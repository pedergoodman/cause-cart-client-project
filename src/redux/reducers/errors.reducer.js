import { combineReducers } from 'redux';

// TODO: Add error prompts to relevant areas in both redux and on DOM

// loginMessage holds the string that will display
// on the login screen if there's an error
const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your email and password!';
    case 'LOGIN_FAILED':
      return "Oops! The email and password didn't match. Try again!";
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};

// registrationMessage holds the string that will display
// on the registration screen if there's an error
const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose an email and password!';
    case 'REGISTRATION_FAILED':
      return "Oops! That didn't work. The email might already be taken. Try again!";
    default:
      return state;
  }
};

const dropboxLoadingSpinner = (state = false, action) => {
  switch (action.type) {
    case 'SET_DBX_LOADING_ACTIVE':
      return true;
    case 'SET_DBX_LOADING_INACTIVE':
      return false;
    default:
      return state;
  }
};



// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default combineReducers({
  loginMessage,
  registrationMessage,
  dropboxLoadingSpinner,
});
