const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  token: null,
};

// logic is not great,

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_FAILURE":
      return { ...state, isSignedIn: false };
    case "LOGIN_SUCCESS":
      return { ...state, isSignedIn: true, user: action.payload };
    case "SIGN_IN_FAILURE":
      return { ...state, isSignedIn: false };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    //add sign out fail?
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
