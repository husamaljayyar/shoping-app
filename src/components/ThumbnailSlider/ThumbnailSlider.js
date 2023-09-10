/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ThumbnailSlider.css";

export const ThumbnailSlider = ({ images }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();




  return (
    <>
      <section className="mainContanier">
        <Slider
          className="Slider1"
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
        >
          <div>
            <img
              className=""
              style={{ width: "418px" }}
              src={images[0]}
            />
          </div>
          <div>
            <img className="w-100 h-100" src={images[1]} />
          </div>

          <div>
            <img className="w-100 h-100" src={images[2]} />
          </div>
        </Slider>













        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="Slider2"
        >
          <div className="">
            <img
              className=""
              style={{ width: "138px" }}
              src={images[0]}
            />
          </div>
          <div className="">
            {" "}
            <img
              className=""
              style={{ width: "138px" }}
              src={images[1]}
            />
          </div>

          <div className="">
            {" "}
            <img
              className=""
              style={{ width: "138px" }}
              src={images[2]}
            />
          </div>
        </Slider>
      </section>
    </>
  );
};
