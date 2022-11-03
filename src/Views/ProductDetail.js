import "../Assets/Styles/product-general-detail.css";
import "../Assets/Styles/product-more-detail.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByName } from "../FakeAPIs";

import ProductGeneralDetail from "../Components/ProductGeneralDetail";
import ProductMoreDetail from "../Components/ProductMoreDetail";
import ProductSlide from "../Components/ProductSlide";
import { resetCurrProduct, setCurrProduct } from "../Services/Reducers/productReducer";

export default function ProductDetail(props) {
  const product = useSelector((state) => state.product.currProduct);
  const dispatch = useDispatch();
  const { productName } = useParams();

  useEffect(() => {
    if (product) dispatch(resetCurrProduct());
    getProductByName(productName)
      .then((res) => JSON.parse(res))
      .then((data) => dispatch(setCurrProduct(data)));
  }, []);

  return (
    product && (
      <>
        <ProductGeneralDetail product={product} />
        <ProductMoreDetail product={product} />
        {/* <ProductSlide /> */}
      </>
    )
  );
}
