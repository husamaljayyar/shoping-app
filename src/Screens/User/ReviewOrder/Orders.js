import "./Styles.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getOrders } from "../../../Redux/Orders/OrderAction";

const Orders = () => {
  const orders = useSelector((state) => state.orders.userOrders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const navigate = useNavigate();
  const GoBack = () => {
    navigate(-1);
  };

  function getDate(myDate) {
    let date = new Date(myDate).getDate();
    let month = new Date(myDate).getMonth();
    let year = new Date(myDate).getFullYear();
    return (myDate = date + "-" + month + "-" + year);
  }

  console.log(orders);
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center  ">
      <div className="containerss">
        <div
          className="font-monospace w-100 mt-4 lh-sm"
          style={{ cursor: "pointer" }}
        >
          <p className="fs-3 fw-bold w-100">My Orders</p>
          <div
            className="d-flex flex-row position-relative"
            style={{ top: "-12px" }}
          >
            <p className="text-secondary fs-5  " onClick={GoBack}>
              Back /
            </p>
            <p className="text-black fs-5 pl-1" onClick={navigate(+1)}>
              Order
            </p>
          </div>
        </div>

        <table
          className="table w-100 text-center font-monospace bg-container  fs-6 
            "
        >
          <tr className="text-black fw-bold thead bg-dark text-white">
            <th scope="col" className="ps-4">
              #
            </th>
            <th scope="col">Products</th>
            <th scope="col">Created At</th>
            <th scope="col">Payment</th>
            <th scope="col">Delivery</th>
            <th scope="col">Total</th>
          </tr>

          {orders.map((item) => (
            <tr className=" bg-container ">
              <th className="ps-4">{item?.id}</th>
              <th>{item.orderItems?.length}</th>

              <th className="">
                {item.pay?.create_time
                  ? getDate(item?.pay?.create_time)
                  : "no date"}
              </th>

              <th>
                {item.pay?.amount_paid ? item.pay?.amount_paid : "Not Paid"}
              </th>

              <th>{item.pay?.status ? "Delivered" : "Not Delivered"}</th>
              <th>${item?.totalPrice}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
