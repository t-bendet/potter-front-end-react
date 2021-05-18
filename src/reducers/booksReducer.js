import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from "../actions/types";

export default (state = { isLoading: false, error: "", data: [] }, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return { ...state, isLoading: true, error: "" };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        data: action.payload,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
