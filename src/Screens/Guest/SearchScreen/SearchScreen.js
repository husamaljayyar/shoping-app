import ProductCard from "../../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFeaturedProducts } from "../../../Redux/Guest/gustAction";
import "../../../components/NavBar/navbar.css";
import { useSearchParams } from "react-router-dom";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const product = state.guestState.products;
  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  // useSearchParams => get value from url
  const [searchParams] = useSearchParams();
  const values = searchParams.get("value");

  return (
    <div className="d-flex flex-row align-items-center justify-content-center m-10 ">
      <div className="containerss  d-flex flex-row flex-wrap    align-items-center justify-content-center mt-5 pb-10  ">
        {product
          ?.filter((item) => {
            /*              if (values === "") {
              return null;
            } else if (values === "allDevices") {
              return item;
            } else if (values === "smartphone") {
              return item.category.toLowerCase().includes(values.toLowerCase());
            } else if (
              item.title.toLowerCase().includes(values.toLowerCase())
            ) {
              return item;
            }
 */

            switch (values) {
              case "": {
                return null;
              }
              case "all_devices": {
                return item;
              }
              case "smartphone": {
                return item.category
                  .toLowerCase()
                  .includes(values.toLowerCase());
              }
              case values: {
                return item.title.toLowerCase().includes(values.toLowerCase());
              }
              default:
                return null;
            }
          })
          .map((item) => (
            <ProductCard
              id={item.id}
              key={item.id}
              image={item.thumbnails?.[0]}
              name={item.title}
              price={item.price}
              reviews={item.reviews}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchScreen;

/*


        {product
          ?.filter((item) => {
            if (values === "") {
              return null;
            } else if (values === "allDevices") {
              return item;
            } else if (values === "smartphone") {
              return item.category.toLowerCase().includes(values.toLowerCase());
            } else if (
              item.title.toLowerCase().includes(values.toLowerCase())
            ) {
              return item;
            }
          })
          
*/
