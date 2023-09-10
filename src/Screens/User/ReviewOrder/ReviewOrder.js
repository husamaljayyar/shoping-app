import "./Styles.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById, payOrder } from "../../../Redux/Orders/OrderAction";
import { useParams } from "react-router";

const ReviewOrder = () => {

  const state = useSelector((state) => state);
  const user = state?.userDetails?.user.user;

  const orders = state.orders.userOrder.order;
  const shippingAddress = orders.shippingAddress;

  const Totalitems = orders.orderItems?.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);


  const dispatch = useDispatch();

  const { orderId } = useParams();
  const id = orderId

  useEffect(() => {
    dispatch(getOrderById(id));
  }, [dispatch]);

  return (
    <>
      <div
        className=" d-flex flex-column justify-content-start align-items-center pt-lg-0 pt-2 mt-5 "
        style={{ minHeight: "100vh" }}
      >
        <div className=" orderContainer d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center ">
          <div className="reviewOrder rounded-2 text-black mr-lg-2 mr-0 p-sm-5 p-3 me-lg-4">

            <section className="pb-5">
              <p className="fs-4 text-black fw-bolder font-monospace text-start w-100 ">
                Shipping Address
              </p>
              <p>{user.name} </p>
              <p>{shippingAddress?.country} - {shippingAddress?.city}</p>
            </section>

            <section className="d-flex flex-column align-items-center justify-content-center">
              <p className="fs-4 text-black font-weight-bold text-start w-100 ">
                Order Details
              </p>

              {orders.orderItems?.map((item) => (
                <>
                  <div className="d-flex flex-row align-items-center" style={{ width: "90%" }}>
                    <img
                      className="order-image"
                      src={item.image}
                      alt=""
                    />
                    <div className="d-flex flex-column justify-content-between align-items-start w-100">
                      <p className="fs-6 pt-4  h-100 w-100">{item.title}</p>

                      <div className="d-flex flex-row justify-content-between w-100 ">
                        <p className="fs-6 font-weight-bolder font-normal">
                          ${item.price} <span className="pl-2"> x{item.quantity}</span>
                        </p>

                        <p className="fs-6  font-weight-bolder  font-normal ">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                  </div>
                  <hr className="" style={{ width: "90%" }} />

                </>
              ))}
            </section>
          </div>

          <section className="orderContainer rounded-2 text-black fw-medium fs-5 lh-sm    p-sm-5   p-3  Ccheckout">
            <p style={{ color: "#ff7500" }}>
              Subtotal ({orders.orderItems?.length}) items
            </p>

            <p>Total ({Totalitems}) items</p>
            <p> Total Price: ${orders.totalPrice}</p>
            <div className="pt-4">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          description: "test",
                          amount: {
                            value: orders.totalPrice,
                          },
                        },
                      ],
                    });
                  }}


                  onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                      alert('Congratulations! payment success');
                      dispatch(payOrder(id, details))
                      // send ajax request to update the db
                    });
                  }}
                  onError={(err) => {
                    console.error("PayPal Checkout Error", err)
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};


export default ReviewOrder

