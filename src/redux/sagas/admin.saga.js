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

function* fetchVendorDetails(action) {
  try {
    const response = yield axios.get(`/api/admin/${action.payload}`);
    yield put({ type: "FETCH_VENDOR_DETAILS_SUCCESS", payload: response.data });
  } catch (error) {
    console.log("Error GETting details for a specific vendor id: ", error);
    yield put({ type: "FETCH_VENDOR_DETAILS_FAILURE", error });
  }
}

function* updateOnboardingStage(action) {
    try {
      const response = yield axios.put(
        `/api/admin/onboarding/${action.payload.id}`,
        { onboarding_stage: action.payload.newOnboardingStage }
      );
      if (response.status === 200) {
        yield put({ type: "UPDATE_ONBOARDING_STAGE_SUCCESS", payload: response.data });
        yield put({ type: "FETCH_VENDORS_REQUEST" });
      }
    } catch (error) {
      console.error("Error updating onboarding stage: ", error);
      yield put({ type: "UPDATE_ONBOARDING_STAGE_FAILURE", payload: error });
    }
  }
  
  

function* adminSaga() {
  yield takeLatest("FETCH_VENDORS_REQUEST", fetchVendors);
  yield takeLatest("FETCH_VENDOR_DETAILS_REQUEST", fetchVendorDetails);
  yield takeLatest("UPDATE_ONBOARDING_STAGE", updateOnboardingStage);
}

export default adminSaga;
