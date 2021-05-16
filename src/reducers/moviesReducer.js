import {
  FETCH_MOVIE_LOADING,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_ERROR,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_LOADING:
      return { ...state, [action.payload]: { loading: true, error: "" } };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: "",
          data: action.payload,
        },
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        [action.payload.id]: {
          loading: false,
          error: action.payload.error,
          data: null,
        },
      };
    default:
      return state;
  }
};
