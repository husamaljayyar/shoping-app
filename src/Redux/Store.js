import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./User/userReducer";
import { guestReducers } from "./Guest/gustReducers";
import { cartReducer } from "./Cart/cartReducers";
import { ordersReducers } from "./Orders/OrderReducer";

const reducers = combineReducers({
  userDetails: userReducer,
  guestState: guestReducers,
  cart: cartReducer,
  orders: ordersReducers
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const shippingFromLocalStorage = JSON.parse(localStorage.getItem("shipping")) || {};

const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
  cart: {
    cart: cartFromLocalStorage,
    shippingAddress: shippingFromLocalStorage
  },

};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares)
);




/* store.subscribe(() => console.debug("All Store", store.getState())); */

export default store;


