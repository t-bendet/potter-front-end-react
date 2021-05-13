import superagent from "superagent";
import axios from "axios";
import {
  SIGN_IN,
  SIGN_OUT,
  LOG_IN,
  FETCH_MOVIE,
  SET_ERROR,
  REGISTER_USER,
  DELETE_USER,
  FETCH_USER_STORIES,
  CREATE_USER_STORY,
  EDIT_USER_STORY,
  DELETE_USER_STORY,
} from "./types";

const tmdb = "https://api.themoviedb.org";
const DB = "https://potter-back-end.herokuapp.com";

//****************************************External Api Actions******************************************** */

//
export const fetchMovie = (movie_id) => async (dispatch) => {
  try {
    const response = await superagent.get(
      `${tmdb}/3/movie/${movie_id}?api_key=4d262ae50666747fc7d632e52cc56d65&append_to_response=videos,credits`
    );
    dispatch({ type: FETCH_MOVIE, payload: response.body });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

//****************************************User Auth Actions******************************************** */

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

export const deleteUser = (token) => async (dispatch) => {
  try {
    const response = await superagent
      .delete(`${DB}/users/me`)
      .set("Authorization", token);
    console.log(response);
    dispatch({ type: DELETE_USER, payload: null });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

//****************************************User Content Actions******************************************** */

//**User Stories*/
export const fetchUserStories = (token) => async (dispatch, getState) => {
  try {
    const response = await superagent
      .get(`${DB}/stories`)
      .set("Authorization", token);
    console.log(response);
    dispatch({ type: FETCH_USER_STORIES, payload: response.body });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

export const createStory = (token, story) => async (dispatch) => {
  try {
    const response = await superagent
      .post(`${DB}/stories`)
      .set("Authorization", token)
      .send(story);
    dispatch({ type: CREATE_USER_STORY, payload: response.body });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};
//TODO add a popup are you sure you want to delete
export const deleteStory = (token, id) => async (dispatch) => {
  try {
    const response = await superagent
      .delete(`${DB}/stories/${id}`)
      .set("Authorization", token);
    dispatch({ type: DELETE_USER_STORY, payload: response.body });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

//edit
export const editStory = (token, story, id) => async (dispatch) => {
  console.log(id);
  try {
    const response = await superagent
      .patch(`${DB}/stories/${id}`)
      .set("Authorization", token)
      .send(story);
    dispatch({ type: EDIT_USER_STORY, payload: response.body });
  } catch (e) {
    dispatch({ type: SET_ERROR, payload: e.message });
  }
};

//**User Drawings*/

//create
//get all
//edit
//delete
