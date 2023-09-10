import "./Styles.css";
import React from "react";
import { ShippingSchema } from "../../../Valedation";
import { addShippingAddress } from "../../../Redux/Cart/cartAction";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Button from "../../../components/Button/Button";
import { placeOrder } from "../../../Redux/Orders/OrderAction";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(addShippingAddress(values));
    dispatch(placeOrder(navigate));
  };

  const initialValues = {
    country: "",
    city: "",
    address: "",
    postalCode: "",
  };

  return (
    <>
      <section className=" d-flex flex-column align-items-center mt-3">
        <Formik
          initialValues={initialValues}
          validationSchema={ShippingSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => {
            return (
              <Form className="orderContainer d-flex flex-column align-items-center  flex-lg-row  align-items-lg-start  justify-content-center w-100">
                <div className=" rounded-2 shippingAddress me-lg-4  p-3 p-sm-5">
                  <p className="fs-4 text-black fw-bolder text-start w-100 font-monospace">
                    Shipping Address
                  </p>
                  <div className="d-flex flex-sm-row flex-column pb-2  font-monospace mt-5">
                    <div className="w-100 pe-1 m-2 ">
                      <label className="fs-5 w-100">Country</label>
                      <Field
                        className=" rounded-2 ps-2 mt-1 w-100 "
                        name="country"
                      />
                      {errors.country && touched.country ? (
                        <p className="text-danger">{errors.country}</p>
                      ) : null}
                    </div>

                    <div className="w-100 pe-1 m-2">
                      <label className="fs-5">City</label>
                      <Field
                        className="rounded-2 ps-2 mt-1 w-100"
                        name="city"
                      />
                      {errors.country && touched.city ? (
                        <p className="text-danger">{errors.city}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="d-flex flex-sm-row flex-column pb-2 mt-3">
                    <div className="w-100 pe-1 m-2">
                      <label className="fs-5">Postal Code</label>
                      <Field
                        className="rounded-2 ps-2 mt-1 w-100   "
                        name="postalCode"
                      />
                      {errors.postalCode && touched.postalCode ? (
                        <p className="text-danger">{errors.postalCode}</p>
                      ) : null}
                    </div>

                    <div className="w-100 ml-sm-2 ps-1 m-2">
                      <label className="fs-5">Street Address</label>
                      <Field
                        className=" rounded-2 ps-2 mt-1  w-100"
                        name="address"
                      />
                      {errors.address && touched.address ? (
                        <p className="text-danger">{errors.address}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="order-detailss rounded-3 p-3 p-sm-5 mt-lg-0 mt-2 ">
                  <p className="fs-4 fw-bolder font-monospace text-black">
                    Order Details
                  </p>
                  {state.cart.cart.map((item) => (
                    <>
                      <div className="w-100 d-flex flex-row align-items-center">
                        <img
                          className="order-image"
                          src={item.image}
                          alt="product cart"
                        />
                        <div className="d-flex flex-column justify-content-between align-items-start w-100">
                          <p className="fs-6 pt-4  h-100 w-100">{item.title}</p>

                          <div className="d-flex flex-row justify-content-between w-100 ">
                            <p className="fs-6  font-weight-bolder  font-normal ">
                              ${item.price}{" "}
                              <span className="pl-2"> x{item.quantity}</span>
                            </p>

                            <p className="fs-6  font-weight-bolder  font-normal ">
                              ${item.price}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </>
                  ))}

                  <div className=" lh-sm p-2">
                    <div className="d-flex justify-content-between">
                      <p style={{ color: "#ff7500" }}>Subtotal</p>
                      <p className="fs-6 text-secondary  ">
                        $
                        {state.cart.cart
                          .reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p style={{ color: "#ff7500" }}>Tax</p>
                      <p className="fs-6 text-secondary  ">$0</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p style={{ color: "#ff7500" }}>Shipping</p>
                      <p className="fs-6 text-secondary  ">$0.00</p>
                    </div>

                    <div className="d-flex justify-content-between font-weight-bold">
                      <p style={{ color: "#ff7500" }}>Total</p>
                      <p className="fs-6 text-black   ">
                        $
                        {state.cart.cart
                          .reduce(
                            (acc, item) => acc + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {state.orders.placeOrder.error && (
                    <p>{state.orders.placeOrder.error}</p>
                  )}

                  <Button
                    as="button"
                    /*                     onClick={() => dispatch(placeOrder(navigate))} */
                    isLoading={state.orders.placeOrder.isLoading}
                    className="btn fs-5 mt-1 rounded-2 text-white w-100 bg-dark"
                    type="submit"
                    text="Place an Order"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
};

export default PlaceOrder;
