import {
  ADD_TO_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_SHIPPING_ADDRESS,
  DELETE_CART_ITEM,
} from "./cartTypesConstants.js";

export const cartReducer = (
  initialState = {
    cart: [],
    shippingAddress: {
      country: "",
    },
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...initialState,
        cart: [...initialState.cart, action.payload],
      };

    case INCREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };

    case DECREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };

    case DELETE_CART_ITEM:
      return {
        ...initialState,
        cart: initialState.cart.filter((item) => item.id != action.payload),
      };

    case ADD_SHIPPING_ADDRESS:
      return {
        ...initialState,
        shippingAddress: action.payload,
      };

    default:
      return initialState;
  }
};
