import React from "react";
import { IoIosSend } from "react-icons/io";
 

export const FooterForm = () => {

  return (
    <>
      <div
        className="text-white p-4 flex-row align-items-center justify-content-center w-100"
        style={{
          background: "#f9823c",
          display: 'flex'
        }}
      >
        <div className="w-100 h-100 d-md-flex d-none">
          <p className="fs-5 font-weight-bolder text-uppercase">
            <span className="font-weight-light">SUBSCRIBE TO OUR </span>
            <br /> follow our offers
          </p>
        </div>

        <form action="#" className=" w-75 " style={{ maxWidth: "500px" }}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control border-0 rounded-5"
              placeholder="Enter email address"
            />

            <button
              className="fotter-InputButton position-relative fs-3 bg-white border-0  d-flex flex-row align-items-center rounded-5">
              <IoIosSend className="pt-2 fs-2" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


