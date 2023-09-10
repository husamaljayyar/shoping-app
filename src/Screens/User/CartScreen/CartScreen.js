import "./CartScreen.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decreaseCartItemQty,
  deleteCartItem,
} from "../../../Redux/Cart/cartAction";
import CartItem from "../../../components/CartItem/CartItem";
import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const CartScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const navigate = useNavigate();
  const GoBack = () => {
    const id = 1;
    navigate(`/product/:${id}`);
  };

  const user = useSelector((state) => state.userDetails.user.user);
  const [Message, setMessage] = useState("");

  function handleNavigate() {
    if (user) navigate("/placeOrder");
    else setMessage("- Please login to go to the next page");
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center ">
      <div className="containerss  pt-6">
        <div className="d-flex flex-row" style={{ cursor: "pointer" }}>
          <p className="text-secondary fs-6 mt-5 " onClick={GoBack}>
            Back / ProductDetails / Shopping Cart
          </p>
        </div>








        <div className="d-flex flex-xl-row flex-column align-items-center align-items-sm-start  justify-content-between mt-2 rounded-2 text-black  ">
          <div className="d-flex flex-column w-100 pe-1 ">
            {state.cart.cart.map((item) => (
              <CartItem
                increaseCounter={() => {
                  if (item.quantity < item.Stock)
                    dispatch(addCartItem(item, 1));
                }}
                decreaseCounter={() => {
                  if (item.quantity > 1) dispatch(decreaseCartItemQty(item, 1));
                }}
                key={item.id}
                name={item.title}
                price={item.price * item.quantity}
                image={item.image}
                counter={item.quantity}
                handleDelete={() => dispatch(deleteCartItem(item.id))}
              />
            ))}
          </div>
















          <div className="checkout rounded-2 text-black fw-semibold fs-5 lh-base  d-flex flex-column align-items-center py-2    ">
            <div className="pt-4 w-75">
              <p className="" style={{ color: "#ff7500" }}>
                Subtotal ({state.cart.cart.length}) items
              </p>

              <p>
                Total (
                {state.cart.cart.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0)}
                ) items
              </p>

              <p className="">
                {" "}
                Total Price:
                <span className="fw-semibold">
                  $
                  {state.cart.cart
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
                </span>
              </p>
            </div>
            <hr className="w-75" />

            <Button
              as={"button"}
              onClick={handleNavigate}
              className="btn text-decoration-none text-white  text-capitalize rounded-2 fw-semibold  bg-dark mb-3 "
              text="  Proceed to checkout"
              width={"75%"}
              height={"45px"}
            />
            {!user ? (
              <div className="fs-5 mt-4 text-center">
                <Link
                  to="/login"
                  className="text-decoration-none "
                  style={{ color: "red" }}
                >
                  {" "}
                  {Message}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

/*

import "./CartScreen.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decreaseCartItemQty,
  deleteCartItem,
} from "../../../Redux/Cart/cartAction";
import CartItem from "../../../components/CartItem/CartItem";
import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";


const CartScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const navigate = useNavigate();
  const GoBack = () => {
    const id = 1;
    navigate(`/product/:${id}`);
  };


  const user = useSelector((state) => state.userDetails.user.user);
  const [Message, setMessage] = useState('');

  function handleNavigate() {
    if (user)
      navigate("/placeOrder");
    else
      setMessage("- Please login to go to the next page")
  }

  return (
    <div className="mincontanier">
      <div className="innercontainer pt-6">
        <div className="d-flex flex-row" style={{ cursor: "pointer" }}>
          <p className="text-secondary fs-6 mt-5 " onClick={GoBack}>
            Back / ProductDetails / Shopping Cart
          </p>
        </div>

        <div className="d-flex flex-md-row flex-column align-items-center align-items-sm-start  justify-content-between mt-2 rounded-2 text-black  ">
          <div className="d-flex flex-column w-100 pe-1">
            {state.cart.cart.map((item) => (
              <CartItem
                increaseCounter={() => {
                  if (item.quantity < item.Stock)
                    dispatch(addCartItem(item, 1));
                }}
                decreaseCounter={() => {
                  if (item.quantity > 1) dispatch(decreaseCartItemQty(item, 1));
                }}
                key={item.id}
                name={item.title}
                price={item.price * item.quantity}
                image={item.image}
                counter={item.quantity}
                handleDelete={() => dispatch(deleteCartItem(item.id))}
              />
            ))}
          </div>

          <div className="checkout rounded-2 text-black fw-semibold fs-5 lh-base p-5">
            <p className="" style={{ color: "#ff7500" }}>
              Subtotal ({state.cart.cart.length}) items
            </p>

            <p>
              Total (
              {state.cart.cart.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
              ) items
            </p>

            <p className="">
              {" "}
              Total Price:
              <span className="fw-semibold">

                $
                {state.cart.cart
                  .reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </span>
            </p>
            <hr />

            <Button as={"button"}
              onClick={handleNavigate}
              className="btn text-decoration-none text-white  text-capitalize rounded-2 fw-semibold mt-1 bg-dark "
               text="  Proceed to checkout"
               width={"200px"}
               height={"45px"}

            />
            {!user ?
              <div className="fs-5 mt-4 text-center" >
                <Link to="/login" className="text-decoration-none " style={{ color: "red" }}> {Message}
                </Link>
              </div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen
*/
