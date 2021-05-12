import superagent from "superagent";
import axios from "axios";
import {
  SIGN_IN,
  SIGN_OUT,
  LOG_IN,
  FETCH_MOVIE,
  SET_ERROR,
  REGISTER_USER,
} from "./types";

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
    dispatch({ type: FETCH_MOVIE, payload: response.data });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

export const validateUser = (token) => async (dispatch) => {
  try {
    const response = await superagent
      .get(`${DB}/users/me`)
      .set("Authorization", token);
    dispatch({ type: LOG_IN, payload: response.body });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

export const signIn = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`${DB}/users/login`, formValues);
    dispatch({ type: SIGN_IN, payload: response.data });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

export const signOut = (token) => async (dispatch) => {
  try {
    const response = await superagent
      .post(`${DB}/users/logout`)
      .set("Authorization", token);
    dispatch({ type: SIGN_OUT, payload: null });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

export const registerUser = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`${DB}/users`, formValues);
    console.log(response.data, "data");
    dispatch({ type: REGISTER_USER, payload: response.data });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};
