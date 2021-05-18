import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import moviesReducer from "./moviesReducer";
import userStoriesReducer from "./userStoriesReducer";
import userDrawingsReducer from "./userDrawingsReducer";
import { reducer as formReducer } from "redux-form";
import fansArtReducer from "./fansArtReducer";

export default combineReducers({
  movies: moviesReducer,
  authentication: authenticationReducer,
  form: formReducer,
  userStories: userStoriesReducer,
  userDrawings: userDrawingsReducer,
  fansArt: fansArtReducer,
});
