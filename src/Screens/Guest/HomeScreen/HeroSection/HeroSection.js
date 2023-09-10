import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  const navigate = useNavigate();

  const navigateHandler = (value) => {
    navigate({
      pathname: "search",
      search: "?" + createSearchParams({ value }),
    });
  };

  return (
    <>
      <section className="w-100 d-flex flex-column justify-content-center align-items-center pb-9 pt-5  ">
        <section className="containerss  d-flex flex-lg-row flex-column  align-items-start  justify-content-between">
          <ul className="list-group  h-100 fs-5   lh-lg  border border-dark-subtle border-1  text-dark fw-light d-xl-block d-none col-xl-3  ">
            <li
              className="list-group-item bg-dark text-white border-0 fs-4 "
              aria-disabled="true"
            >
              {" "}
              All Categories
            </li>

            <Button
              as={"button"}
              className="list-group-item pointer-events border-0 fw-light border-bottom w-100 text-start"
              onClick={() => navigateHandler("all_devices")}
              text="- See all devices"
            />

            <Button
              as={"button"}
              className="list-group-item pointer-events border-0 fw-light border-bottom w-100 text-start"
              onClick={() => navigateHandler("smartphone")}
              text="- Mobile device "
            />

            <Button
              as={"button"}
              className="list-group-item pointer-events border-0 fw-light border-bottom w-100 text-start"
              onClick={() => navigateHandler("Headphone")}
              text="- All Headphones & Earbuds"
            />

            <Button
              as={"button"}
              className="list-group-item pointer-events border-0 fw-light border-bottom w-100 text-start"
              onClick={() => navigateHandler("samsung")}
              text="- samsung product"
            />

            <Button
              as={"button"}
              className="list-group-item pointer-events border-0 fw-light  w-100 text-start"
              onClick={() => navigateHandler("iphone")}
              text="- Iphone product"
            />
          </ul>

          <div className=" contanerSlider col-xl-9 col-12  ps-1 ">
            <Slider {...settings} className="">
              <img
                className="rounded-1  "
                src="/assets/images/hero-section/img2.jpg"
                alt="SliderImage"
              />
              <img
                className="rounded-1  "
                src="/assets/images/hero-section/img3.jpg"
                alt="SliderImage"
              />
            </Slider>
          </div>
        </section>
      </section>
    </>
  );
};
export default HeroSection;
 