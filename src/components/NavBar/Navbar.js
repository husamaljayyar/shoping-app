import "./navbar.css";
import { BsShop } from "react-icons/bs";

// AiOutlineUser
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { logoutAction } from "../../Redux/User/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import { createSearchParams } from "react-router-dom";

import { LiaUserCheckSolid } from "react-icons/lia";
import { LiaUserTimesSolid } from "react-icons/lia";
import { FaShopify } from "react-icons/fa";
import { LuUserCheck, LuUserX } from "react-icons/lu";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const handleSubmit = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  const product = useSelector((state) => state.guestState.products);
  const LogoStyle = { color: "#404040", fontSize: "37px" }; // ff7500

  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const navigateHandler = () => {
    navigate({
      pathname: "search",
      search: "?" + createSearchParams({ value }),
    });
  };

  return (
    <>
      <div className=" d-flex flex-row justify-content-center shadow-sm">
        <section className="containerss pt-2 ">
          <nav className="w-100 d-flex flex-row justify-content-between">
            <Link to="/">
              <FaShopify
                className="mt-1 "
                style={LogoStyle}
                onClick={() => setValue("")}
              />  
{/*               <img className="mt-2" style={{height: "35px"}} src="/assets/images.png" />
 */}            </Link>

            {/* search component */}
            <section className="container-search w-50 mt-1 ">
              <input
                className="input-search"
                type="text"
                name="Search"
                value={value}
                onChange={handleChange}
              />
              <button
                className="button-search m-2  fw-bold  "
                onClick={navigateHandler}
              >
                <BsSearch className="" style={{ width: "18px" }} />
              </button>{" "}
            </section>

            {/* Cart Icon*/}

            <div
              className="d-flex justify-content-between text-center text-white  "
              style={{ width: "150px", height: "55px" }}
            >
              <div
                className="text-black d-flex align-items-center justify-content-center "
                style={{}}
              >
                <span className="item-count rounded-5 bg-dark text-white  position-absolute ms-4 h6 pb-1  mb-3">
                  {state.cart.cart.length}
                </span>

                <Link className="text-decoration-none" to={"/cart"}>
                  <AiOutlineShoppingCart
                    className="fs-4"
                    style={{ color: "#404040" }}
                  />
                </Link>
              </div>

              {/* User Icon */}
              <div className="text-black d-flex align-items-center justify-content-center mb-1 ">
                {state.userDetails.user.user ? (
                  <div className="text-black d-flex align-items-center justify-content-center ">
                    <Link className="text-decoration-none" to="profile">
                      <LuUserCheck
                        className="fs-4 m-1 "
                        style={{ color: "#404040" }}
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="text-black d-flex align-items-center justify-content-center ">
                    <Link to={"/login"} className="text-decoration-none">
                      <LuUserX
                        className="fs-4  m-1"
                        style={{ color: "#404040" }}
                      />
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar Component */}
              <div className="  d-flex align-items-center justify-content-center  ">
                <button
                  className="border-0 bg-white "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <GrMenu
                    className="fs-3 fw-bold "
                    style={{ color: "#404040" }}
                  />{" "}
                </button>
              </div>
            </div>

            <div
              className="offcanvas offcanvas-end bg-dark "
              style={{ width: "350px" }}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header bg-white text-black ">
                <h4
                  className="fs-5 text-center fw-semibold pt-3"
                  id="offcanvasNavbarLabel"
                >
                  <FaUserCircle className="fs-3 mb-1 " /> Hello,
                  {state.userDetails.user.user?.name}
                </h4>
                <button
                  className="text-decoration-none border-0 bg-white"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <AiOutlineClose className="text-black fs-4" />
                </button>
              </div>

              <div className="offcanvas-body ">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5 p-2 fw-light">
                  <li className="nav-item mt-4">
                    <Link className="text-decoration-none text-white" to={"/"}>
                      {" "}
                      HomePage
                    </Link>
                  </li>
                  <li className="nav-item mt-4">
                    <Link
                      className="text-decoration-none text-white"
                      to={"/cart"}
                    >
                      {" "}
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item mt-4">
                    <Link
                      className="text-decoration-none text-white"
                      to={"/register"}
                    >
                      {" "}
                      Register
                    </Link>
                  </li>
                  <li className="nav-item mt-4">
                    <Link
                      className="text-decoration-none text-white"
                      to={"/profile"}
                    >
                      {" "}
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item mt-4">
                    <Link
                      className="text-decoration-none text-white"
                      to={"/orders"}
                    >
                      My Orders
                    </Link>
                  </li>
                  {state.userDetails.user.user ? (
                    <li className="nav-item mt-4">
                      <button
                        className="border-0 text-white bg-dark fw-light"
                        onClick={handleSubmit}
                      >
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li className="nav-item mt-4">
                      <Link
                        to={"/login"}
                        className="text-decoration-none text-white "
                      >
                        Login
                      </Link>
                    </li>
                  )}{" "}
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbar;
