import { FETCH_MOVIE_SUCCESS, MOVIE_SELECTED } from "../actions/types";

export const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        [action.payload.id]: {
          data: action.payload,
        },
      };

    default:
      return state;
  }
};

export const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === MOVIE_SELECTED) {
    return action.payload;
  }
  return selectedMovie;
};
