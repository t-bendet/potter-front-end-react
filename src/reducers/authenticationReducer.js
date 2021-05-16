import {
  SIGN_IN,
  SIGN_OUT,
  LOG_IN,
  REGISTER_USER,
  DELETE_USER,
  USER_LOADING,
  USER_ERROR,
  USER_LOADING_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  user: null,
  token: null,
  error: null,
  isLoading: false,
};

//TODO add delete users drawings and stories on log out
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case LOG_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
        token: action.payload.token,
        isLoading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        token: null,
        isLoading: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        isSignedIn: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        isSignedIn: false,
        user: null,
        token: null,
        isLoading: false,
      };
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
