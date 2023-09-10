import "./ProductCard.css";
import { Ratings } from "../Ratings/Ratings";
import { Link } from "react-router-dom";
import { addCartItem } from "../../Redux/Cart/cartAction";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { BiCartDownload } from "react-icons/bi";

const ProductCard = ({
  id,
  name,
  image,
  price,
  children,
  reviews,
  product,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  // Average Rating
  let result = 0;
  const average_rating = reviews?.reduce(function (sum, item, index) {
    return (result = sum + (item.rating * 5) / reviews.length / 5);
  }, 0);

  const products = {
    id: product?.id,
    title: product?.title,
    price: product?.price,
    image: product?.thumbnails?.[0],
    Stock: product?.Stock,
  };

  return (
    <>
      <div className="card me-2 mb-2 text-black   d-flex flex-column align-items-center">
        <Link
          className="text-decoration-none w-100  text-black"
          to={`/product/${id}`}
        >
          <img className="image_card w-100" src={image} alt="Not Found" />
          <section
            className="d-flex flex-column align-items-center  fs-5 mt-3 p-1
                   about-top h-auto bold"
          >
            <p className="p-0 m-0 text-center">{name.substring(0, 22)}</p>
            <Ratings className="" AverageRating={average_rating} />
            <div className="d-flex mt-1">
              {" "}
              <p className="fw-medium mt-1">${price}</p>
              <p className=" mt-1 text-secondary ps-2 text-decoration-line-through">
                ${price + 15}
              </p>
            </div>
          </section>
        </Link>

        <Button
          as="button"
          className="d-flex align-items-center justify-content-center border border-1 border-dark  text-dark mb-4 fw-normal bg-white
            rounded-4 fs-5 text-decoration-none"
          background=""
          width="150px"
          height="45px"
          onClick={() => {
            if (products.Stock) dispatch(addCartItem(products, count));
          }}
          text="Add to cart"
        />
      </div>
    </>
  );
};
export default ProductCard;
