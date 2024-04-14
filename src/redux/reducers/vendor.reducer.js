// Reducer for storing all data of logged in vendor
// Switch statement to displaying message depending on status
const vendorReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_VENDOR_INFO":
      return action.payload;
    default:
      return state;
  }
};

export default vendorReducer;
