import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import movieReducer from "./movieReducer";
import errorReducer from "./errorReducer";
import userStoriesReducer from "./userStoriesReducer";
import userDrawingsReducer from "./userDrawingsReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  movie: movieReducer,
  authentication: authenticationReducer,
  form: formReducer,
  error: errorReducer,
  userStories: userStoriesReducer,
  userDrawings: userDrawingsReducer,
});
