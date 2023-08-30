import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchVendors() {
    try {
      const response = yield axios.get("/api/admin");
      yield put({ type: "FETCH_VENDORS_SUCCESS", payload: response.data });
    } catch (error) {
      console.log("Error GETting vendors list for admin: ", error);
      yield put({ type: "FETCH_VENDORS_FAILURE", payload: error });
    }
  }
  

function* adminSaga() {
  yield takeLatest("FETCH_VENDORS_REQUEST", fetchVendors);
}

export default adminSaga;
