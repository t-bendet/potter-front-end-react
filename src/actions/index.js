import tmdb from "../apis/tmdb";

export const fetchMovie = (movie_id) => async (dispatch) => {
  const response = await tmdb.get(
    `/3/movie/${movie_id}?api_key=4d262ae50666747fc7d632e52cc56d65&append_to_response=videos,credits`
  );

  dispatch({ type: "FETCH_MOVIE", payload: response.data });
};

export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
