import "../HeroSection/Styles.css";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts } from "../../../../Redux/Guest/gustAction";

import { GrLinkNext } from "react-icons/gr";
const FeaturedProducts = () => {
  const dispatch = useDispatch(getFeaturedProducts);

  const products = useSelector((store) => store.guestState.products);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
/*       nextArrow: <GrLinkNext />,   */
 
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="featured_products" className="d-flex flex-column align-items-center justify-content-center mt-10 pb-10  ">
      <div className="mb-2 containerss ">
        <h2 className="mt-5  ml-5 fs-5 font-weight-bold text-uppercase  text-start">
          Featured Products
        </h2>
        <p className="ml-5 text-start">
          Preorder now to receive exclusive deals & gifts
        </p>
      </div>

      <div className="containerss p-0 m-0  d-flex flex-column justify-content-center ">
        <Slider {...settings} className=" m-0 p-0">
          {products.map((item) => (
            <ProductCard
              id={item.id}
              key={item.id}
              product={item}
              name={item.title}
              image={item?.thumbnails?.[0]}
              price={item.price}
              reviews={item.reviews}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default FeaturedProducts;
