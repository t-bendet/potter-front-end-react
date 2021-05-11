import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import movieReducer from "./movieReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  movie: movieReducer,
  authentication: authenticationReducer,
  form: formReducer,
});
