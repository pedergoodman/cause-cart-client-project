import { put, takeLatest } from "redux-saga/effects";
// import { put, takeLatest, call } from "redux-saga/effects";
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
    // console.log("Fetching vendor details for id: ", action.payload);
    const response = yield axios.get(`/api/admin/${action.payload}`);
    console.log("Response from API: ", response);
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
      { status: action.payload.newOnboardingStage }
    );
    if (response.status === 200) {
      yield put({
        type: "UPDATE_ONBOARDING_STAGE_SUCCESS",
        payload: response.data,
      });
      yield put({ type: "FETCH_VENDORS_REQUEST" });
    }
  } catch (error) {
    console.error("Error updating onboarding stage: ", error);
    yield put({ type: "UPDATE_ONBOARDING_STAGE_FAILURE", payload: error });
  }
}

function* fetchAdminTemplates() {
  try {
    const response = yield axios.get("/api/admin/templates");
    yield put({ type: "UPDATE_ADMIN_TEMPLATES", payload: response.data });
    console.log("success fetching admin templates", response.data);
  } catch (error) {
    console.log("error fetching admin template", error);
  }
}

function* fetchAdminCategories() {
  try {
    const response = yield axios.get("/api/admin/category");
    yield put({ type: "UPDATE_ADMIN_CATEGORY", payload: response.data });
    console.log("success fetching admin categories", response.data);
  } catch (error) {
    console.log("error fetching admin categories", error);
  }
}

// TODO: UPDATE AND COMPLETE DELETE VENDOR
// function* deleteVendor(action) {
//     try {
//       const response = yield axios.delete(`/api/admin/${action.payload.id}`);
//       if (response.status === 200) {
//         yield put({ type: "DELETE_VENDOR_SUCCESS", payload: action.payload.id });
//         yield put({ type: "FETCH_VENDORS_REQUEST" });
//       } else {
//         throw new Error('Failed to delete vendor.');
//       }
//     } catch (error) {
//       console.log("Error deleting vendor", error);
//       yield put({ type: DELETE_VENDOR_FAILURE, payload: error.message });
//     }
//   }

function* adminSaga() {
  yield takeLatest("FETCH_VENDORS_REQUEST", fetchVendors);
  yield takeLatest("FETCH_VENDOR_DETAILS_REQUEST", fetchVendorDetails);
  yield takeLatest("UPDATE_ONBOARDING_STAGE", updateOnboardingStage);
  yield takeLatest("FETCH_ADMIN_TEMPLATES", fetchAdminTemplates);
  yield takeLatest("FETCH_ADMIN_CATEGORIES", fetchAdminCategories);
  yield takeLatest("FETCH_ADMIN_CATEGORIES", fetchAdminCategories);
  // TODO: UPDATE AND COMPLETE DELETE VENDOR
  //   yield takeLatest("DELETE_VENDOR", deleteVendor);
}

export default adminSaga;
