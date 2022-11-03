import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTopSellers, setNewProducts } from "../Services/Reducers/productReducer";
import { setAllCategories } from "../Services/Reducers/categoryReducer";

import Hero from "../Components/Hero";
import ImageCategory from "../Components/ImageCategory";
import ProductSlide from "../Components/ProductSlide";
import Collection from "../Components/Collection";

import "../Assets/Styles/navbar.css";
import "../Assets/Styles/hero.css";
import "../Assets/Styles/image-category.css";
import "../Assets/Styles/product-slide.css";
import "../Assets/Styles/product-card.css";
import "../Assets/Styles/collection.css";
import "../Assets/Styles/footer.css";

import { getNewProducts, getTopSellers, getAllCategories } from "../FakeAPIs";

function Home() {
  const newProducts = useSelector((state) => state.product.newProducts);
  const topSellers = useSelector((state) => state.product.topSellers);
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getNewProducts(), getTopSellers(), getAllCategories()]).then((values) => {
      Promise.all([JSON.parse(values[0]), JSON.parse(values[1]), JSON.parse(values[2])]).then(
        (values) => {
          dispatch(setNewProducts(values[0]));
          dispatch(setTopSellers(values[1]));
          dispatch(setAllCategories(values[2]));
        },
      );
    });
  }, []);

  return (
    <>
      <Hero />
      <ImageCategory categories={categories} />
      <ProductSlide title="Top Sellers" products={topSellers} />
      <ProductSlide title="New Products" products={newProducts} />
      <Collection />
    </>
  );
}

export default Home;
