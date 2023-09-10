import "./CartItem.css";
import React, { useState } from "react";
import propTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";
import { Count } from "../Count/Count";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../Redux/Cart/cartAction";

const CartItem = ({
  name,
  price,
  image,
  counter,
  increaseCounter,
  decreaseCounter,
  handleDelete,
  id,
}) => {
  return (
    <>
      <div className="contanier-cart p-2 rounded-2 mb-1 w-100 ">





        <div className="w-100 d-flex d-flex flex-row align-items-center justify-content-between ">
          <img className="cart-image h-100" src={image} alt="Image Not Found" />
          <div className="d-flex flex-sm-row flex-column w-100">
            <p className="fs-5  mt-2 textTitle">{name}</p>
            <div className=" w-100 d-flex flex-column  justify-content-around ">
             
              <div className="contantCart d-flex flex-sm-row flex-column align-items-sm-center align-items-start  justify-content-between">
                <Count
                  Increment={increaseCounter}
                  Decrement={decreaseCounter}
                  counter={counter}
                />
                <p className="fs-5  mt-2">${price}</p>
              </div>
              
            </div>
          </div>

          <AiFillCloseCircle className=" fs-2 " style={{ width:"50px"}}  onClick={handleDelete} />
        </div>








      </div>
    </>
  );
};

// initial values to function
CartItem.defaultProps = {
  handleDelete: () => {},
  increaseCounter: () => {},
  decreaseCounter: () => {},
  counter: 1,
};

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  counter: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  increaseCounter: propTypes.func.isRequired,
  decreaseCounter: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default CartItem;


/*


import "./CartItem.css";
import React, { useState } from "react";
import propTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";
import { Count } from "../Count/Count";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../Redux/Cart/cartAction";

const CartItem = ({
  name,
  price,
  image,
  counter,
  increaseCounter,
  decreaseCounter,
  handleDelete,
  id,
}) => {
  return (
    <>
      <div className="contanier-cart p-2 rounded-2 mb-1 w-100">
        <div className="w-100 d-flex d-flex flex-row align-items-center justify-content-between">
          <img className="cart-image h-100" src={image} alt="Image Not Found" />
          <div className="d-flex flex-sm-row flex-column w-100">
            <p className="fs-5  mt-2 textTitle">{name}</p>
            <div className=" w-100 d-flex flex-column  justify-content-around ">
              <div className="contantCart d-flex flex-row align-items-center justify-content-between">
                <Count
                  Increment={increaseCounter}
                  Decrement={decreaseCounter}
                  counter={counter}
                />
                <p className="fs-5  mt-2">${price}</p>
              </div>
            </div>
          </div>

          <AiFillCloseCircle className="fs-1" onClick={handleDelete} />
        </div>
      </div>
    </>
  );
};


*/