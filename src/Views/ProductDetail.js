import "../Assets/Styles/product-general-detail.css";
import "../Assets/Styles/product-more-detail.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getProductByName, getRelatedProduct } from "../FakeAPIs";

import ProductGeneralDetail from "../Components/ProductGeneralDetail";
import ProductMoreDetail from "../Components/ProductMoreDetail";
import ProductSlide from "../Components/ProductSlide";
import {
  resetCurrProduct,
  setCurrProduct,
  setRelatedProducts,
} from "../Services/Reducers/productReducer";

export default function ProductDetail(props) {
  const location = useLocation();

  const product = useSelector((state) => state.product.currProduct);
  const relatedProducts = useSelector((state) => state.product.relatedProducts);

  const dispatch = useDispatch();
  const { productName } = useParams();

  useEffect(() => {
    if (product) dispatch(resetCurrProduct());

    Promise.all([getProductByName(productName), getRelatedProduct(productName)]).then((values) => {
      Promise.all([JSON.parse(values[0]), JSON.parse(values[1])]).then((values) => {
        dispatch(setCurrProduct(values[0]));
        dispatch(setRelatedProducts(values[1]));
      });
    });
  }, [location]);

  return (
    product && (
      <>
        <ProductGeneralDetail product={product} />
        <ProductMoreDetail product={product} />
        <ProductSlide title="Related Products" products={relatedProducts} />
      </>
    )
  );
}
