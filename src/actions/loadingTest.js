export const LOAD_USERS_LOADING = "REDUX_THUNK_LOAD_USERS_LOADING";
export const LOAD_USERS_SUCCESS = "REDUX_THUNK_LOAD_USERS_SUCCESS";
export const LOAD_USERS_ERROR = "REDUX_THUNK_LOAD_USERS_ERROR";

export const loadUsers = () => (dispatch) => {
  dispatch({ type: LOAD_USERS_LOADING });
  Api.getUsers()
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: LOAD_USERS_SUCCESS, data }),
      (error) =>
        dispatch({
          type: LOAD_USERS_ERROR,
          error: error.message || "Unexpected Error!!!",
        })
    );
};
import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from "./actions";
const initialState = { data: [], loading: false, error: "" };
export default function reduxThunkReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_LOADING: {
      return { ...state, loading: true, error: "" };
    }
    case LOAD_USERS_SUCCESS: {
      return { ...state, data: action.data, loading: false };
    }
    case LOAD_USERS_ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
}
