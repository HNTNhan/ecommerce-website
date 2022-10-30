import React, { useState } from "react";

import useWindowDimensions from "../Hooks/useWindowDimensions";

import ProductCard from "../Components/ProductCard";

export default function ProductSlide(props) {
  const [slideIndex, setslideIndex] = useState(0);
  const slidesLength = props.products.length;
  const windowDimensions = useWindowDimensions();
  const numProductCard = windowDimensions.width > 1000 ? 5 : windowDimensions.width > 700 ? 3 : 2;

  function handleClickPrevious() {
    setslideIndex((prevSlideIndex) => (prevSlideIndex <= 0 ? 0 : prevSlideIndex - 1));
  }

  function handleClickNext() {
    setslideIndex((prevSlideIndex) =>
      prevSlideIndex >= slidesLength - numProductCard ? prevSlideIndex : prevSlideIndex + 1,
    );
  }

  const productCardElements = props.products.map((product) => {
    return <ProductCard key={product.id} slideIndex={slideIndex} data={product} />;
  });

  return (
    <section className="product-slide">
      <div className="container">
        <div className="product-slide__content">
          <h1 className="product-slide__title">{props.title}</h1>
          <div className="product-slide__slide">
            <button onClick={handleClickPrevious} className="product-slide__btn previus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button onClick={handleClickNext} className="product-slide__btn next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            {productCardElements}
          </div>
        </div>
      </div>
    </section>
  );
}
