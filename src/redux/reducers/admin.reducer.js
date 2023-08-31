const initialState = {
  loading: false,
  vendors: [],
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VENDORS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_VENDORS_SUCCESS":
      return {
        ...state,
        loading: false,
        vendors: action.payload,
      };
    case "FETCH_VENDORS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_ONBOARDING_STAGE_SUCCESS":
      return {
        ...state,
        vendors: state.vendors.map((vendor) =>
          vendor.id === action.payload.id
            ? { ...vendor, status: action.payload.status }
            : vendor
        ),
      };
    case "UPDATE_ONBOARDING_STAGE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialDetailsState = {
  vendorDetails: null,
  error: null,
};

const vendorDetailsReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case "FETCH_VENDOR_DETAILS_REQUEST":
      return {
        ...state,
        error: null,
      };
    case "FETCH_VENDOR_DETAILS_SUCCESS":
      return {
        ...state,
        vendorDetails: action.payload,
      };
    case "FETCH_VENDOR_DETAILS_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export { adminReducer, vendorDetailsReducer };
