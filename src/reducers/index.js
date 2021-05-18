import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import { moviesReducer, selectedMovieReducer } from "./moviesReducer";
import userStoriesReducer from "./userStoriesReducer";
import userDrawingsReducer from "./userDrawingsReducer";
import { reducer as formReducer } from "redux-form";
import fansArtReducer from "./fansArtReducer";
import booksReducer from "./booksReducer";

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  authentication: authenticationReducer,
  form: formReducer,
  userStories: userStoriesReducer,
  userDrawings: userDrawingsReducer,
  fansArt: fansArtReducer,
  books: booksReducer,
});
