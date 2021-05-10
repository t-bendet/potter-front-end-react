import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  movie: movieReducer,
  authentication: authenticationReducer,
});
