import {
  SIGN_IN,
  SIGN_OUT,
  LOG_IN,
  REGISTER_USER,
  DELETE_USER,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  token: null,
};

// logic is not great,

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        token: action.payload.token,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null, token: null };
    case REGISTER_USER:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case DELETE_USER:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};
