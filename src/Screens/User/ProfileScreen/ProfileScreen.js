import React from "react";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../../Redux/User/userAction";

const ProfileScreen = () => {
  const state = useSelector((state) => state.userDetails.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <>
      <section className="d-flex flex-row align-items-center justify-content-center Main">
        <div className="innerContanier  d-flex flex-sm-row flex-column align-items-center justify-content-center ">
          <div className="bg-black text-white d-flex flex-column p-4 lh-lg rounded-2 optionList  m-3">
            <p className="fs-4 fw-bold pt-7 pb-10 border-bottom ">
              {state.user?.name}
            </p>

            <p className="">
              <Link className="text-decoration-none text-white" to="/orders">
                My Orders
              </Link>
            </p>
            <p className=" ">Setting</p>
            <p className="">Password</p>
            <p className="">Logout</p>
          </div>

          <div
            className=" d-flex flex-column p-4 lh-lg rounded-2 w-100"
            style={{ width: "900px", height: "350px", background: "#EAEAEA" }}
          >
            <div className="">
              <p className="fs-4 text-black fw-bold pt-7 pb-10  ">My Profile</p>

              <div className="fs-5 fw-lighter">
                <p>
                  Name
                  <span className="ps-sm-5 p-2">{state.user?.name}</span>
                </p>

                <p>
                  Email
                  <span className="ps-sm-5 p-2">{state.user?.email}</span>
                </p>
              </div>

              <div className="mt-5 w-25  ">
                <Button
                  className="btn text-decoration-none text-white  text-capitalize rounded-5 pt-2 bg-dark  "
                  width={"200px"}
                  height={"45px"}
                  onClick={handleSubmit}
                  text="Upload new photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileScreen;
