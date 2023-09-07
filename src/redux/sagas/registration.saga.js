// * - IMPORTING -
// Redux Saga
import { put, takeLatest } from "redux-saga/effects";
// Axios
import axios from "axios";

// Worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  console.log("\nregisterUser worker saga running due to action:", action.type);
  console.log("action.payload is:", action.payload)
  try {
    // Email and password from payload
    const { email, password } = action.payload;

    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" }); // ? might remove later (prime's error messages)

    // passes the email and password from the payload to the server
    yield axios.post("/api/user/register", action.payload);

    // automatically log a user in after registration
    yield put({ type: "LOGIN", payload: { email, password } });


    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: "SET_TO_LOGIN_MODE" });
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
} // end registerUser

// Listener Saga
function* registrationSaga() {
  yield takeLatest("REGISTER", registerUser);
}

export default registrationSaga;