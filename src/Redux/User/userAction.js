import axios from "axios";
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_START,
  USER_SIGNUP_FAILED,
  USER_SIGNUP_SUCCESS,
  USER_GET_PROFILE_START,
  USER_GET_PROFILE_SUCCESS,
  USER_GET_PROFILE_FAILED,
  USER_LOGOUT_SUCCESS,
  ADD_REVIEW_RESET,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
} from "./userTypesConstants";
import API_URL from "../../Api";

export const loginAction = (values, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: USER_LOGIN_START,
    });

    try {
      const response = await axios.post(
        `${API_URL}/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data,
      });

      navigate("/");
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: error.response,
      });
    }
  };
};

export const registerAction = (values, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_START,
    });

    try {
      const response = await axios.post(
        `${API_URL}/register`,
        {
          name: values.name,
          email: values.email,
          password: values.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({
        payload: response.data,
        type: USER_SIGNUP_SUCCESS,
      });
      navigate("/");
    } catch (error) {
      dispatch({
        payload: error.response.data.message,
        type: USER_SIGNUP_FAILED,
      });
    }
  };
};

export const addingReviewAction = (values) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_REVIEW_START,
    });

    const state = getState();
    console.log()

    /*     const {
      userDetails: {
        user: { Token },
      },
    } = state; */

    // `${API_URL}/products/${id}/review`,

    try {
      const response = await axios.post(`${API_URL}/reviews`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch({
        payload: response.data.message,
        type: ADD_REVIEW_SUCCESS,
      });
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: ADD_REVIEW_FAILED,
      });
    }
  };
};



// Logout
export const logoutAction = () => {
  localStorage.removeItem("user");
  return {
    payload: null,
    type: USER_LOGOUT_SUCCESS,
  };
};
