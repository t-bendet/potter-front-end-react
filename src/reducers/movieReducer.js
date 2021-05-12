import { FETCH_MOVIE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...action.payload, ...state };
    default:
      return state;
  }
};
