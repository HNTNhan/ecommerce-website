import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import usePrevious from "../Hooks/usePrevious";

import {
  resetFilter,
  resetShowFilterList,
  setAllCategories,
  setFilterRoom,
} from "../Services/Reducers/categoryReducer";
import { setFilterProducts } from "../Services/Reducers/productReducer";

import CategoryDescription from "../Components/CategoryDescription";
import CategoryContent from "../Components/CategoryContent";

import "../Assets/Styles/category-description.css";
import "../Assets/Styles/category-content.css";
import "../Assets/Styles/category-filter.css";
import "../Assets/Styles/product-list.css";
import "../Assets/Styles/pagination.css";

import { getAllCategories, getProductsByFilterAndSorted } from "../FakeAPIs";
import { convertToSlug } from "../utilities";

export default function Category(props) {
  const location = useLocation();
  const { roomName } = useParams();
  const { categories, filter, sorted, filterProducts, totalFilterProduct, page, numProduct } =
    useSelector((state) => ({
      categories: state.category.categories,
      filter: state.category.filter,
      sorted: state.category.sorted,
      filterProducts: state.product.filterProducts,
      totalFilterProduct: state.product.totalFilterProduct,
      page: state.product.page,
      numProduct: state.product.numProduct,
    }));
  const prevPage = usePrevious(page);

  const currentCategory = categories.find((category) => {
    return convertToSlug(category.name) === convertToSlug(roomName);
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories()
      .then((res) => JSON.parse(res))
      .then((categories) => dispatch(setAllCategories(categories)));
  }, []);

  useEffect(() => {
    dispatch(resetShowFilterList());
    dispatch(resetFilter());
    dispatch(setFilterRoom(roomName));
  }, [location]);

  useEffect(() => {
    const sort = Object.keys(sorted).find((key) => sorted[key] === true);

    getProductsByFilterAndSorted(filter, sort, page === prevPage ? 1 : page, 5)
      .then((res) => JSON.parse(res))
      .then((data) => {
        dispatch(
          setFilterProducts({
            data: data.products,
            total: data.total,
            page: data.page,
          }),
        );
      });
  }, [filter, sorted, page]);

  return (
    <>
      <CategoryDescription category={currentCategory} categories={categories} />
      <CategoryContent
        category={currentCategory}
        categories={categories}
        filterProducts={filterProducts}
        totalFilterProduct={totalFilterProduct}
        page={page}
        numProduct={numProduct}
      />
    </>
  );
}
