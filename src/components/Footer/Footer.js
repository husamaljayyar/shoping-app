import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FooterForm } from "./FooterForm";

export default function Footer() {
  return (
    <>
      <div className="d-flex flex-column align-items-center  justify-content-between bottom-0  mt-5 text-white fs-6">
  {/*       <div className="footer-contant">
          <FooterForm />
        </div> */}
        <div
          className="w-100 d-flex flex-column align-items-center p-5 "
          style={{ background: "#000000de" }}
        >
          <div className="d-flex flex-row align-items-start justify-content-between flex-wrap  footer-contant  ">
            <div className="  ">
              <h5 className="footer-title fs-6 fw-bold">INFORMATION</h5>
              <ul className="lh-lg">
                <li>Delivery Information</li>
                <li>Conditions </li>
                <li>Contact </li>
                <li>Returns </li>
              </ul>
            </div>

            <div className="">
              <h5 className="footer-title fs-6 fw-bold">CATEGORIES</h5>
              <ul className="lh-lg">
                <li>Smartphones </li>
                <li>Headphones </li>
                <li>Mobile Accessories
                </li>

              </ul>
            </div>

            <div className="">
              <h5 className="footer-title fs-6 fw-bold">MY ACCOUNT</h5>
              <ul className="lh-lg">
                <li>My account</li>
                <li>Privacy Policy</li>
                <li>Frequently Questions</li>
                <li>My Order</li>
              </ul>
            </div>

            <div className="footer-ListContant ">
              <div className=" mt-10 ">
                <div
                  className="footer-widget-single-item footer-widget-color--green aos-init aos-animate "
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <h5 className="footer-title fs-6 fw-bold">ABOUT US</h5>
                  <div className="footer-about">
                    <address>
                      <span>Address: Palestine - Gaza</span><br />
                      <span>Email: demo@example.com</span>
                    </address>
                  </div>
                </div>

                <div className="w-100 d-flex">
                  <a
                    className="me-3 btn-link btn-floating  text-dark"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <FaFacebookSquare className="text-white fs-4" />
                  </a>
                  <a
                    className="me-3 btn-link btn-floating text-dark"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <FaTwitterSquare className="text-white fs-4" />
                  </a>
                  <a
                    className="me-3 btn-link btn-floating text-dark "
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <RiInstagramFill className="text-white fs-4" />
                  </a>
                  <a
                    className="  btn-link btn-floating  text-dark "
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <IoLogoYoutube className="text-white fs-4" />
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-100 text-white d-flex p-4 "
          style={{ background: "#000000e3" }}
        >
          <p className="m-auto"> 2022 © All rights are save</p>
        </div>
      </div>
    </>
  );
}