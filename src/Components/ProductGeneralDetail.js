import { useEffect, useState } from "react";
import QuantityInputGroup from "../Components/QuantityInputGroup";

export default function ProductGeneralDetail({ product }) {
  const [materialsColors, setMaterialsColors] = useState(null);
  console.log(product, materialsColors);
  useEffect(() => {
    if (product) {
      setMaterialsColors(product["materials_colors"][0].name);
    }
  }, [product]);

  return (
    product &&
    materialsColors && (
      <section className="product-general-detail">
        <div className="container row">
          <div className="product-general-detail__thumbnail">
            <img
              src={require(`../Assets/Images/ProductImage/${product.name.replaceAll(" ", "")}/${
                product.product_images[materialsColors][0]
              }`)}
              alt="product 1"
              className="product-general-detail__main-thumbnail"
            />
            <div className="product-general-detail__thumbnail-slide">
              <img
                className="selected"
                src={require("../Assets/Images/ProductImage/Product-1-1.jpg")}
                alt="product 1"
              />
              <img src={require("../Assets/Images/ProductImage/Product-1-2.jpg")} alt="product 2" />
              <img src={require("../Assets/Images/ProductImage/Product-1-3.jpg")} alt="product 3" />
              <img src={require("../Assets/Images/ProductImage/Product-1-4.jpg")} alt="product 4" />
              <img src={require("../Assets/Images/ProductImage/Product-1-5.jpg")} alt="product 5" />
            </div>
          </div>
          <div className="product-general-detail__content">
            <div className="product-general-detail__header">
              <div>
                <h3 className="product-general-detail__title">Milo Sleeper Sectional</h3>
                <div className="product-general-detail__sale-info">
                  <div className="product-general-detail__rating-star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                    </svg>
                  </div>
                  <span>26 ratings</span>
                  <span>|</span>
                  <span>156 sold</span>
                </div>
              </div>
              <div>
                <p className="product-general-detail__price">$5249</p>
              </div>
            </div>
            <div className="product-general-detail__material">
              <h4 className="product-general-detail__sub-title">Material</h4>
              <div className="product-general-detail__list-img">
                <button>
                  <img
                    src={require("../Assets/Images/ProductMaterial/Alesund.jpg")}
                    alt="material 1"
                  />
                </button>
                <button>
                  <img
                    src={require("../Assets/Images/ProductMaterial/Malmo.jpg")}
                    alt="material 2"
                  />
                </button>
                <button>
                  <img
                    src={require("../Assets/Images/ProductMaterial/DarkComet.jpeg")}
                    alt="material 3"
                  />
                </button>
              </div>
            </div>
            <div className="product-general-detail__orientation">
              <h4 className="product-general-detail__sub-title">Orientation</h4>
              <div className="product-general-detail__list-img">
                <button>
                  <img
                    src={require("../Assets/Images/ProductOrientation/left.jpg")}
                    alt="material 1"
                  />
                </button>
                <button>
                  <img
                    src={require("../Assets/Images/ProductOrientation/right.jpg")}
                    alt="material 2"
                  />
                </button>
              </div>
            </div>
            <div className="product-general-detail__quantity">
              <h4 className="product-general-detail__sub-title">Qty:</h4>
              <QuantityInputGroup />
            </div>
            <button className="product-general-detail__add-to-cart-btn">Add to cart</button>
          </div>
        </div>
      </section>
    )
  );
}
