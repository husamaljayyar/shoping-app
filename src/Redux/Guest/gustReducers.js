import {
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_FEATURED_PRODUCTS_FAILED,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILED,
} from "./userTypesConstants";

export const guestReducers = (
  initialState = {
    products: [],
    product: [],
    isLoading: false,
    error: "",

    searchResults: {
      products: [],
      isLoading: false,
    }
  },

  action
) => {
  switch (action.type) {
    /* Product Cases  */
    case GET_FEATURED_PRODUCTS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...initialState,
        products: action.payload,
        isLoading: false,
      };
    case GET_FEATURED_PRODUCTS_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    /** Product by id Cases*/
    case GET_PRODUCT_BY_ID_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...initialState,
        product: action.payload,
        isLoading: false,
      };
    case GET_PRODUCT_BY_ID_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
