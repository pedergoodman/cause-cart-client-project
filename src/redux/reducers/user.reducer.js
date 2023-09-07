const userReducer = (state = {}, action) => {
    console.log('action.payload:', action?.payload);
    switch (action.type) {
      case 'SET_USER':
        return action.payload;
      case 'REGISTER_SUCCESS':
        return { ...state, registrationStatus: 'success' };
      case 'LOGIN_SUCCESS':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };
  
  export default userReducer;
