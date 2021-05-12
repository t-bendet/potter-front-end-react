import superagent from "superagent";
import axios from "axios";

const tmdb = "https://api.themoviedb.org";
const DB = "https://potter-back-end.herokuapp.com";

//TODO improve try catch
// TODO hide api key and db(add db key in back end)
//TODO create a general error action creator and a seprate component to dispaly to user(set time out and then delete error)

export const fetchMovie = (movie_id) => async (dispatch) => {
  try {
    const response = await superagent.get(
      `${tmdb}/3/movie/${movie_id}?api_key=4d262ae50666747fc7d632e52cc56d65&append_to_response=videos,credits`
    );
    dispatch({ type: "FETCH_MOVIE", payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

export const validateUser = (token) => async (dispatch) => {
  try {
    const response = await superagent
      .get(`${DB}/users/me`)
      .set("Authorization", token);
    if (response.body.error) {
      dispatch({ type: "LOGIN_FAILURE", payload: null });
    } else {
      dispatch({ type: "LOGIN_SUCCESS", payload: response.body });
    }
  } catch (e) {
    console.log(e);
  }
};

export const signIn = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`${DB}/users/login`, formValues);
    dispatch({ type: "SIGN_IN_SUCCESS", payload: response.data });
  } catch (e) {
    dispatch({ type: "SIGN_IN_FAILURE", payload: null });
  }
};

export const signOut = (token) => async (dispatch) => {
  try {
    const response = await superagent
      .post(`${DB}/users/logout`)
      .set("Authorization", token);
    dispatch({ type: "SIGN_OUT", payload: null });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
