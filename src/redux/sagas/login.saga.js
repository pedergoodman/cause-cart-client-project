// * - IMPORTING -
// Saga
import { put, takeLatest } from "redux-saga/effects";
// Axios
import axios from "axios";

// * Worker Saga: will be fired on "LOGIN" actions
function* loginUser(action) {
  try {
    // clear any existing error on the login page
    yield put({ type: "CLEAR_LOGIN_ERROR" });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // send the action.payload as the body
    // the config includes credentials which
    // allow the server session to recognize the user
    const response = yield axios.post(
      "/api/user/login",
      action.payload,
      config
    );

    // dispatch LOGIN_SUCCESS action with the response data
    yield put({ type: "LOGIN_SUCCESS", payload: response.data });

    // after the user has logged in
    // get the user information from the server
    yield put({ type: "FETCH_USER" });
  } catch (error) {
    console.log("Error with user login:", error);
    if (error.response.status === 401) {
      // The 401 is the error status sent from passport
      // if user isn't in the database or
      // if the username and password don't match in the database
      yield put({ type: "LOGIN_FAILED" });
    } else {
      // Got an error that wasn't a 401
      // Could be anything, but most common cause is the server is not started
      yield put({ type: "LOGIN_FAILED_NO_CODE" });
    }
  }
} // end loginUser

// * Worker Saga: will be fired on "LOGOUT" actions
function* logoutUser(action) {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // when the server recognizes the user session
    // it will end the session
    yield axios.post("/api/user/logout", config);

    // now that the session has ended on the server
    // remove the client-side user object to let
    // the client-side code know the user is logged out
    yield put({ type: "UNSET_USER" });
  } catch (error) {
    console.log("Error with user logout:", error);
  }
} // end logoutUser

// * Worker Saga: will be fired on "FETCH_VENDOR_INFO" actions
// retrieving vendor info then storing in vendor global reducer state
function* fetchVendorInfo(action) {
  console.log(
    "Worker saga fetchVendorInfo running due to action:",
    action.type
  );

  try {
    // Declaring user id from payload
    const { userID } = action.payload;

    // Get request of all vendor info
    const vendorInfo = yield axios.get(`/api/user/login/${userID}`);

    // Sending dispatch to vendor redux with payload of info
    yield put({ type: "SET_VENDOR_INFO", payload: vendorInfo.data });
  } catch (error) {
    console.log("Error with fetching vendor information:", error);
  }
} // end fetchVendorInfo

// * Listener sagas: run function depending on action
function* loginSaga() {
  yield takeLatest("LOGIN", loginUser);
  yield takeLatest("LOGOUT", logoutUser);
  yield takeLatest("FETCH_VENDOR_INFO", fetchVendorInfo);
} // end loginSaga

// * Exporting loginSaga
export default loginSaga;
