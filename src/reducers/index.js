import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import moviesReducer from "./moviesReducer";
import errorReducer from "./errorReducer";
import userStoriesReducer from "./userStoriesReducer";
import userDrawingsReducer from "./userDrawingsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  movies: moviesReducer,
  authentication: authenticationReducer,
  form: formReducer,
  error: errorReducer,
  userStories: userStoriesReducer,
  userDrawings: userDrawingsReducer,
});
