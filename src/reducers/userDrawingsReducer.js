import {
  FETCH_USER_DRAWINGS,
  CREATE_USER_DRAWING,
  EDIT_USER_DRAWING,
  DELETE_USER_DRAWING,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_DRAWINGS:
      return [...action.payload];
    case CREATE_USER_DRAWING:
      return [...state, action.payload];
    case EDIT_USER_DRAWING:
      const index = state.findIndex((el) => el === action.payload._id);
      const newState = [...state];
      newState[index] = action.payload;
      return newState;
    case DELETE_USER_DRAWING:
      return [
        ...state.filter((drawing) => {
          return drawing._id !== action.payload._id;
        }),
      ];
    default:
      return state;
  }
};
