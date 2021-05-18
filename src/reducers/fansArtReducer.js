import {
  FETCH_ALL_USERS_STORIES,
  FETCH_ALL_USERS_DRAWINGS,
} from "../actions/types";

export default (state = { fansDrawings: [], fansStories: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_STORIES:
      return { ...state, fansStories: [...action.payload] };
    case FETCH_ALL_USERS_DRAWINGS:
      return { ...state, fansDrawings: [...action.payload] };
    default:
      return state;
  }
};
