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
      console.log("Fetching vendor details for id: ", action.payload);
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
        yield put({ type: "UPDATE_ONBOARDING_STAGE_SUCCESS", payload: response.data });
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
    yield put ({type:'UPDATE_ADMIN_TEMPLATES', payload:response.data})
    console.log("success fetching admin templates", response.data)
  }
  catch (error) {
    console.log('error fetching admin template', error)
  }
}
function* fetchAdminCategories() {
  try {
    const response = yield axios.get("/api/admin/category");
    yield put ({type:'UPDATE_ADMIN_CATEGORY', payload:response.data})
    console.log("success fetching admin categories", response.data)
  }
  catch (error) {
    console.log('error fetching admin categories', error)
  }
}

function* editAdminCategory(action) {
  try {
    const { id, name } = action.payload;
    yield axios.put(`/api/admin/category/${id}`, { category_name: name });
    yield put({ type: "FETCH_ADMIN_CATEGORIES" }); 
  } catch (error) {
    console.log("Error editing category", error);
  }
}

function* deleteAdminCategory(action) {
  try {
    const categoryId = action.payload;
    yield axios.delete(`/api/admin/category/${categoryId}`);
    yield put({ type: "FETCH_ADMIN_CATEGORIES" });
  } catch (error) {
    console.log("Error deleting category", error);
  }
}

function* addAdminCategory(action) {
  try {
    const { name } = action.payload;
    yield axios.post(`/api/admin/category`, { category_name: name });
    yield put({ type: "FETCH_ADMIN_CATEGORIES" }); 
  } catch (error) {
    console.log("Error adding category", error);
  }
}
function* adminSaga() {
  yield takeLatest("FETCH_VENDORS_REQUEST", fetchVendors);
  yield takeLatest("FETCH_VENDOR_DETAILS_REQUEST", fetchVendorDetails);
  yield takeLatest("UPDATE_ONBOARDING_STAGE", updateOnboardingStage);
  yield takeLatest("FETCH_ADMIN_TEMPLATES", fetchAdminTemplates);
  yield takeLatest("FETCH_ADMIN_CATEGORIES", fetchAdminCategories)
  yield takeLatest("EDIT_ADMIN_CATEGORY", editAdminCategory);
  yield takeLatest("DELETE_ADMIN_CATEGORY", deleteAdminCategory);
  yield takeLatest("ADD_ADMIN_CATEGORY", addAdminCategory);
}

export default adminSaga;

