import {
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_FEATURED_PRODUCTS_FAILED,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILED,
} from "./userTypesConstants";
import axios from "axios";
import API_URL from "../../Api";

// Get Featured Products
export const getFeaturedProducts = () => async (dispatch) => {
  dispatch({
    type: GET_FEATURED_PRODUCTS_START,
  });
  try {
    const response = await axios.get(`${API_URL}/products/?_embed=reviews`);
    dispatch({
      type: GET_FEATURED_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_FEATURED_PRODUCTS_FAILED,
      payload: e?.response?.message,
    });
  }
};

// Get Product By Id
export const getProduct = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BY_ID_START,
  });
  try {
    const response = await axios.get(
      `${API_URL}/products/${id}/?_embed=reviews`
    );
    dispatch({
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCT_BY_ID_FAILED,
      payload: e?.response?.message,
    });
  }
};



