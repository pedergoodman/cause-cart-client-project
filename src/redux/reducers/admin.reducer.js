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
        case "SET_VENDORS":
            return {
              ...state,
              vendors: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  