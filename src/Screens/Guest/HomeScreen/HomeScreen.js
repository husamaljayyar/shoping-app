import "./HomeScreen.css";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import TopRatedSection from "./TopRatedSection/TopRatedSection";
import { MobileBanner } from "../../../components/Banner/MobileBanner";
import Footer from "../../../components/Footer/Footer";
import { getFeaturedProducts } from "../../../Redux/Guest/gustAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Services } from "./Services/Services";
import { NewProduct } from "../../../components/NewProduct";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  const products = useSelector((store) => store.guestState.products);
  const newProduct = products.slice(products.length - 4, products.length);

  console.log();
  return (
    <>
      <HeroSection />
      <Services />
      <FeaturedProducts />
      <MobileBanner />
      <TopRatedSection />
      <NewProduct newProduct={newProduct} />
      <Footer />
    </>
  );
};

export default HomeScreen;
