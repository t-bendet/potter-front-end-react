import { SET_ERROR } from "../actions/types";

const initState = {
  error: null,
};

export default (state = initState, action) => {
  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload ? action.payload : "Error has occurred",
    };
  }
  return state;
};
