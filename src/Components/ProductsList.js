import { useDispatch, useSelector } from "react-redux";

import ProductCart from "./ProductCard";
import Pagination from "./Pagination";
import { setSorted } from "../Services/Reducers/categoryReducer";

export default function ProductList(props) {
  const sorted = useSelector((state) => state.category.sorted);
  const dispatch = useDispatch();

  function createProductCardElements() {
    return props.filterProducts.map((product) => (
      <ProductCart className="product-list__item" key={product.id} data={product} />
    ));
  }

  function handSelectSortType(type) {
    let newSorted = Object.keys(sorted).reduce((curr, key) => {
      curr[key] = false;
      return curr;
    }, {});
    newSorted[type] = true;

    dispatch(setSorted(newSorted));
  }

  const sortButtonElements = Object.keys(sorted).map((key) => {
    return (
      <button
        key={key}
        className={sorted[key] ? "selected" : ""}
        onClick={() => handSelectSortType(key)}
      >
        {(key[0].toUpperCase() + key.slice(1)).replace(/([A-Z][a-z]+)([A-Z])/, "$1 $2")}
      </button>
    );
  });

  return (
    <div className="product-list">
      <div className="product-list__header">
        {sortButtonElements}
        <div className="product-list__header__page">
          <span>1</span>
          <span> / </span>
          <span>6</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div className="product-list__content">{createProductCardElements()}</div>
      <Pagination
        page={props.page}
        total={props.totalFilterProduct}
        numProduct={props.numProduct}
      />
    </div>
  );
}
