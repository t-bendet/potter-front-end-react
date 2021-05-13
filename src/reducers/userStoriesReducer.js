import {
  FETCH_USER_STORY,
  FETCH_USER_STORIES,
  CREATE_USER_STORY,
  EDIT_USER_STORY,
  DELETE_USER_STORY,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_STORIES:
      return [...action.payload];
    case CREATE_USER_STORY:
      return [...state, action.payload];
    case EDIT_USER_STORY:
      const index = state.findIndex((el) => el === action.payload._id);
      const newState = [...state];
      newState[index] = action.payload;
      return newState;
    case DELETE_USER_STORY:
      return [
        ...state.filter((story) => {
          return story._id !== action.payload._id;
        }),
      ];
    default:
      return state;
  }
};
