import superagent from "superagent";
import axios from "axios";
import {
  SIGN_IN,
  SIGN_OUT,
  LOG_IN,
  USER_ERROR,
  USER_LOADING,
  USER_LOADING_SUCCESS,
  REGISTER_USER,
  DELETE_USER,
  FETCH_USER_STORIES,
  CREATE_USER_STORY,
  EDIT_USER_STORY,
  DELETE_USER_STORY,
  FETCH_USER_DRAWINGS,
  CREATE_USER_DRAWING,
  EDIT_USER_DRAWING,
  DELETE_USER_DRAWING,
  FETCH_MOVIE_SUCCESS,
  FETCH_ALL_USERS_STORIES,
  FETCH_ALL_USERS_DRAWINGS,
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  MOVIE_SELECTED,
} from "./types";
const tmdb = "https://api.themoviedb.org";
const DB = "https://potter-back-end.herokuapp.com";
const API = "https://potter-crawler-api.herokuapp.com";
//const DB = "http://localhost:3001"

//****************************************External Api Actions******************************************** */

export const tryFetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_LOADING });
  try {
    const response = await superagent.get(`${API}/books`);
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.body.books });
  } catch (e) {
    dispatch({
      type: FETCH_BOOKS_ERROR,
      payload: { error: e.message },
    });
  }
};

export const tryFetchMovie = (movie_id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent.get(
      `${tmdb}/3/movie/${movie_id}?api_key=4d262ae50666747fc7d632e52cc56d65&append_to_response=videos,credits`
    );
    dispatch({ type: FETCH_MOVIE_SUCCESS, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const selectMovie = (movie) => {
  return {
    type: MOVIE_SELECTED,
    payload: movie.data,
  };
};

//****************************************User Auth Actions******************************************** */

export const validateUser = (token) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .get(`${DB}/users/me`)
      .set("Authorization", token);
    response.body.token = token;
    dispatch({ type: LOG_IN, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const signIn = (formValues) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await axios.post(`${DB}/users/login`, formValues);

    dispatch({ type: SIGN_IN, payload: response.data });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    console.log(e.message);
    dispatch({ type: USER_ERROR, payload: e });
  }
};

export const signOut = (token) => async (dispatch) => {
  try {
    await superagent.post(`${DB}/users/logout`).set("Authorization", token);
    dispatch({ type: SIGN_OUT, payload: null });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const registerUser = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post(`${DB}/users`, formValues);
    dispatch({ type: REGISTER_USER, payload: response.data });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const deleteUser = (token) => async (dispatch) => {
  try {
    await superagent.delete(`${DB}/users/me`).set("Authorization", token);
    dispatch({ type: DELETE_USER, payload: null });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

//****************************************User Content Actions******************************************** */

//**User Stories*/
export const fetchUserStories = (token) => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .get(`${DB}/stories`)
      .set("Authorization", token);
    dispatch({ type: FETCH_USER_STORIES, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const createStory = (token, story) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .post(`${DB}/stories`)
      .set("Authorization", token)
      .send(story);
    dispatch({ type: CREATE_USER_STORY, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

//TODO add a popup are you sure you want to delete
export const deleteStory = (token, id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .delete(`${DB}/stories/${id}`)
      .set("Authorization", token);
    dispatch({ type: DELETE_USER_STORY, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const editStory = (token, story, id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .patch(`${DB}/stories/${id}`)
      .set("Authorization", token)
      .send(story);
    dispatch({ type: EDIT_USER_STORY, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

//**User Drawings*/

export const fetchUserDrawings = (token) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .get(`${DB}/drawings`)
      .set("Authorization", token);
    dispatch({ type: FETCH_USER_DRAWINGS, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const createDrawing = (token, drawing) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const body = {
      description: drawing.description,
      title: drawing.title,
    };
    const formData = new FormData();
    formData.append("imageFile", drawing.imageFile);
    formData.append("body", JSON.stringify(body));
    const response = await superagent
      .post(`${DB}/drawings`)
      .set("Authorization", token)
      .send(formData);
    console.log(response);
    dispatch({ type: CREATE_USER_DRAWING, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const deleteDrawing = (token, id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent
      .delete(`${DB}/drawings/${id}`)
      .set("Authorization", token);
    dispatch({ type: DELETE_USER_DRAWING, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const editDrawing = (token, drawing, id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const body = {
      description: drawing.description,
      title: drawing.title,
    };
    const formData = new FormData();
    formData.append("imageFile", drawing.imageFile);
    formData.append("body", JSON.stringify(body));
    const response = await superagent
      .patch(`${DB}/drawings/${id}`)
      .set("Authorization", token)
      .send(formData);
    console.log(response);
    dispatch({ type: EDIT_USER_DRAWING, payload: response.body });
    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const fetchAllUserStories = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent.get(`${DB}/admin/Stories`);
    dispatch({ type: FETCH_ALL_USERS_STORIES, payload: response.body });

    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

export const fetchAllUserDrawings = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const response = await superagent.get(`${DB}/admin/drawings`);
    dispatch({ type: FETCH_ALL_USERS_DRAWINGS, payload: response.body });

    dispatch({ type: USER_LOADING_SUCCESS });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};
