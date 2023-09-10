import { Review } from "../../components/Review/Review";
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_GET_PROFILE_START,
  USER_GET_PROFILE_SUCCESS,
  USER_GET_PROFILE_FAILED,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED,
  ADD_REVIEW_RESET,
  USER_LOGOUT_SUCCESS,
} from "./userTypesConstants";

export const userReducer = (
  initialState = {
    user: {
      id: "",
      name: "",
      email: "",
      token: "",
    },
    addingReview: {
      success: false,
      isLoading: false,
      error: "",
    },
    success: false,
    isLoading: false,
    error: "",
  },
  action
) => {
  switch (action.type) {
    /* Login Action */
    case USER_LOGIN_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {

        user: action.payload,
        isLoading: false,
        success: true,
      };
    case USER_LOGIN_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /* Signup action */
    case USER_SIGNUP_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case USER_SIGNUP_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
      };

    case USER_SIGNUP_FAILED:
      return {
        ...initialState,
        error: action.payload,
        isLoading: false,
      };

    /*  Review  */
    case ADD_REVIEW_START:
      return {
        ...initialState,
        addingReview: {
          isLoading: true,
        },
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...initialState,
        addingReview: {
          isLoading: false,
          success: action.payload,
        },
      };
    case ADD_REVIEW_FAILED:
      return {
        ...initialState,
        addingReview: {
          isLoading: false,
          error: action.payload,
        },
      };
    /* Logout action  */
    case USER_LOGOUT_SUCCESS:
      return {
        user: {
          id: "",
          name: "",
          email: "",
          token: "",
        },
      };

    default:
      return initialState;
  }
};
