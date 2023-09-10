import {
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  PAY_ORDER_START,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
} from "./OrderTypesConstants";
import { RESET_CART } from "../Cart/cartTypesConstants";
import axios from "axios";
import API_URL from "../../Api";

export const placeOrder = (navigate) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLACE_ORDER_START,
    });
    const state = getState();

    let requestData = {
      orderItems: [...state.cart.cart],
      shippingAddress: state.cart.shippingAddress,
      totalPrice: state.cart.cart
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
      createdAt: new Date().toLocaleDateString("en-US"),
    };

    const response = await axios.post(`${API_URL}/orders`, requestData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    dispatch({
      type: PLACE_ORDER_SUCCESS,
      payload: response.data.id,
    });

    dispatch({
      type: RESET_CART,
    });
    localStorage.removeItem("cart");
    navigate("/order/" + response.data.id);
  } catch (e) {
    dispatch({
      payload: e?.response?.data?.message,
      type: PLACE_ORDER_FAILED,
    });
  }
};

export const getOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ORDERS_START,
    });
    const response = await axios.get(`${API_URL}/orders`, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      payload: e?.response?.data?.message,
      type: GET_ORDERS_FAILED,
    });
  }
};

export const getOrderById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ORDER_START,
    });
    const state = getState();
    const config = {
      headers: {
        headers: { "Content-Type": "application/json" },
      },
    };
    const response = await axios.get(`${API_URL}/orders/${id}`, config);
    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({ 
      payload: e?.response?.data?.message,
      type: GET_ORDER_FAILED,
    });
  }
};

export const payOrder = (id, details) => async (dispatch, getState) => {
  const state = getState();

  const paymentResults = {
    ...state.orders.userOrder.order,
    pay: {
      paymentMethod: "PayPal",
      amount_paid: details.purchase_units[0].amount.value,
      status: details.status,
      create_time: details.create_time,
      update_time: details.update_time,
      email_address: details.payer.email_address,
      id: details.id,
    },
  };

  try {
    dispatch({
      type: PAY_ORDER_START,
    });

    const response = await axios.put(
      `${API_URL}/orders/${id}`,
      paymentResults,
      {
        headers: {
          headers: { "Content-Type": "application/json" },
        },
      }
    );
    dispatch({
      type: PAY_ORDER_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      payload: e?.response?.data?.message,
      type: PAY_ORDER_FAILED,
    });
  }
};
