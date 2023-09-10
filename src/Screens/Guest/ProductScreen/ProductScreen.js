import "./Styles.css";
import React, { useEffect, useState } from "react";
import { ThumbnailSlider } from "../../../components/ThumbnailSlider/ThumbnailSlider";
import { FaCheckCircle } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/Guest/gustAction";
import { addCartItem } from "../../../Redux/Cart/cartAction";
import { Ratings } from "../../../components/Ratings/Ratings";
import Button from "../../../components/Button/Button";
import { Count } from "../../../components/Count/Count";
import { Review } from "../../../components/Review/Review";
import { BsFillStarFill } from "react-icons/bs";
import { addingReviewAction } from "../../../Redux/User/userAction";

const ProductScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productId } = useParams();
  const id = productId;

  const product = useSelector((state) => state.guestState.product);


  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const GoBack = () => {
    navigate(-1);
  };

  const [count, setCount] = useState(1);
  function Increment() {
    if (count < product.Stock) setCount(count + 1);
  }
  function Decrement() {
    if (count > 1) setCount(count - 1);
  }

  const [showFullDescription, setFullDescription] = useState(false);
  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };
  const description = showFullDescription
    ? product?.description
    : product?.description?.slice(0, 100);

  // Average Rating 
  let result = 0;
  const average_rating = product.reviews?.reduce(function (sum, item, index) {
    return (
      result = sum + ((item.rating * 5) / (product.reviews.length) / 5)
    )
  }, 0);


  const products = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.thumbnails?.[0],
    Stock: product.Stock,

  };

  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleRating() {

    const values = {
      rating: rating,
      feedback: feedback,
      productId: product.id,
    };
    dispatch(addingReviewAction(values));
  }

  return (
    <>
      <section className="main_container">

        <div className="innerContanierrer  ">
          <div className="ThumbnailSlider pe-4 ">
            {" "}
            {product.thumbnails ? (
              <ThumbnailSlider images={product.thumbnails} />
            ) : null}
          </div>

          <div className="pl-4 fs-5 text-black lh-1">
            <div className="d-flex flex-row" style={{ cursor: "pointer" }}>
              <p className="text-secondary fs-5 pt-2  " onClick={GoBack}>
                Back /
              </p>
              <p className="text-black fs-5 pt-2  ps-1" onClick={navigate(+1)}>
                {product.title}
              </p>
            </div>

            <p className="fw-semibold fs-4">{product.title}</p>

            {/*   View rating to product screen  */}
            <Ratings AverageRating={average_rating} />

            <p className="fw-semibold fs-4  mt-3"> ${product.price * count}</p>
            <p className="">
              <span className="fw-semibold fs-5"> Category: </span>
              {product.category}
            </p>
            <p className="">
              <span className="fw-semibold fs-5">Brand: </span>
              {product.brand}
            </p>

            <div className="">
              <p className="fw-semibold fs-5">Available Options</p>
              <div className="d-flex flex-row">
                <FaCheckCircle
                  className="pe-1 pb-2 text-success"
                  style={{ fontSize: "24px" }}
                />
                <p className="fs-6"> {product.Stock} IN STOCK</p>
              </div>
            </div>
            <p className="fw-semibold "> Quantity:</p>
            <div className=" containerButton d-flex flex-row justify-content-between align-items-center">
              <Count
                Increment={Increment}
                Decrement={Decrement}
                counter={count}
              />

              <Button
                link="/cart"
                className="d-flex align-items-center justify-content-center
                rounded-5 fs-5 text-white   text-decoration-none pb-1 "
                background="#ff5500"
                width="160px"
                height="40px"
                onClick={() => {
                  if (product.Stock) dispatch(addCartItem(products, count));
                }}
                text="Add Cart"
              />
            </div>
            <hr className="" />
            <div className="fs-6">
              <p className="lh-base">
                <span className="fw-semibold fs-5">Description:</span>
                <br /> {description}{" "}
              </p>

              <button
                className="bg-white border-0 position-relative fw-semibold"
                style={{ top: "-8px", color: "#ff5500" }}
                onClick={showFullDescriptionHandler}
              >
                Read {showFullDescription ? "Less..." : "More..."}
              </button>
            </div>
          </div>
        </div>

        {/*    View all rating to product   */}
        <section className="productReview border border-dark-subtle border-1 mb-4 mt-5 p-3 d-flex flex-column align-items-center ">
          {product.reviews?.map((item) => (
            <Review rating={item.rating} feedback={item.feedback} />
          ))}

          {/* New review to product */}
          <div className="" style={{ width: "100%" }}>
            <div className="mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control bg-body-secondary mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              {/* New Rate to product */}
              <div className="letter font-monospace color ">
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star fs-5">
                          {" "}
                          <BsFillStarFill className="me-1 " />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button
                as="button"
                className="btn fs-5 mt-1 font-awesome rounded-2 text-white  rounded-1 mb-4 mt-3"
                background="#ff7500"
                onClick={() => handleRating()}
                text="Submit"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductScreen;
