import "./Count.css";
import React from "react";

export const Count = ({ Increment, Decrement, counter }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between contanier-count mr-2 border border-dark border-1">
        <button className="count-btn  bg-dark border-0 h5" onClick={Increment}>
          +
        </button>
        <p className={`mt-3 fs-5`}> {counter}</p>
        <button
          className="count-btn  bg-dark border-0  h5 "
          onClick={Decrement}
        >
          -
        </button>
      </div>
    </>
  );
};
