import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
  movie: movieReducer,
  authentication: authenticationReducer,
});
