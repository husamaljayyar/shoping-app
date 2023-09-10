import {
  INCREASE_COUNT,
  ADD_TO_CART,
  ADD_SHIPPING_ADDRESS,
  DECREASE_COUNT,
  DELETE_CART_ITEM,
} from "./cartTypesConstants.js";

export const addCartItem = (products, quantity) => (dispatch, getState) => {
  const state = getState(); // (getState) this is a method from redux
  const isProductExist = state.cart.cart.find((item) => item.id == products.id);
  // If the product already exists => No add product but work increase the quantity
  if (isProductExist) {
    isProductExist.quantity += quantity;
    // get an index  to the product that already exists
    const index = state.cart.cart.findIndex(
      (item) => item.id == isProductExist.id // Add New product if Equal product Existing
    );
    state.cart.cart[index] = isProductExist; //  add index in array cart and update on isProductExist
    dispatch({
      type: INCREASE_COUNT,
      payload: state.cart.cart,
    });
  } else {
    // check if add Product Not Existing in ListCart  work Add Product in List cart
    products.quantity = quantity;
    products.products = products.id;
    dispatch({
      type: ADD_TO_CART,
      payload: products,
    });
  }
  // save New state in localStorage
  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};





// Decrease Cart //
export const decreaseCartItemQty =
  (product, quantity) => (dispatch, getState) => {
    const state = getState();
    const isProductExist = state.cart.cart.find(
      (item) => item.id == product.id
    );
    if (isProductExist) {
      isProductExist.quantity -= quantity;

      // get iىdex product
      const index = state.cart.cart.findIndex(
        // give me new product in inside new quantity replace Product old in inside old quantity
        // but not ubdate in store but ubdate  only function
        // work ubdate store need pass to payload inside in dispatch
        (item) => item.id == isProductExist.id
      );
      state.cart.cart[index] = isProductExist;



      dispatch({
        type: DECREASE_COUNT,
        payload: state.cart.cart,
      });
    }
    localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
  };


// Delete Cart Item  //
export const deleteCartItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_CART_ITEM,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};


// Add Shipping Address //
export const addShippingAddress = (values) => {
  localStorage.setItem("shipping", JSON.stringify(values));
  return {
    type: ADD_SHIPPING_ADDRESS,
    payload: values,
  };
}; 