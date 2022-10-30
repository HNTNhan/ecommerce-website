import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { convertToSlug } from "../utilities";
import { setFilter, setShowFilterList } from "../Services/Reducers/categoryReducer";

export default function CategoryFilter(props) {
  const showFilterList = useSelector((state) => state.category.showFilterList);
  const filter = useSelector((state) => state.category.filter);
  const dispatch = useDispatch();

  function handleShowFilter(type) {
    dispatch(setShowFilterList({ ...showFilterList, [type]: !showFilterList[type] }));
  }

  function handleSelectType(typeSelected) {
    const check = filter.types.find((type) => type === typeSelected);

    if (check) {
      const newTypes = filter.types.filter((type) => type !== typeSelected);
      dispatch(setFilter({ ...filter, types: newTypes }));
    } else {
      dispatch(setFilter({ ...filter, types: [...filter.types, typeSelected] }));
    }
  }

  function handleSelectMaterialAndColor(materialAndColorSelected) {
    const check = filter.materialsAndColors.find((type) => type === materialAndColorSelected.id);

    if (check) {
      const newMaterialsAndColors = filter.materialsAndColors.filter(
        (type) => type !== materialAndColorSelected.id,
      );
      dispatch(setFilter({ ...filter, materialsAndColors: newMaterialsAndColors }));
    } else {
      dispatch(
        setFilter({
          ...filter,
          materialsAndColors: [...filter.materialsAndColors, materialAndColorSelected.id],
        }),
      );
    }
  }

  function createListRoomItemElements() {
    return props.categories.map((category) => {
      return (
        <li key={category.id} className={category.id === props.category.id ? "selected" : ""}>
          <Link to={"/category/" + convertToSlug(category.name)}>{category.name}</Link>
        </li>
      );
    });
  }

  function createListTypeItemElements() {
    if (!props.category || !props.category.subCategories) return null;

    return props.category.subCategories.map((subCategory) => {
      const isChecked = filter.types.includes(subCategory);

      return (
        <li key={subCategory} className="category-filter__type-list__item">
          <input
            type="checkbox"
            id={subCategory}
            onChange={() => handleSelectType(subCategory)}
            checked={isChecked}
          />
          <label htmlFor={subCategory}>{subCategory}</label>
        </li>
      );
    });
  }

  function createListMaterialAndColorItemElements() {
    if (!props.category || !props.category.colorAndMarterialObj) return null;

    return props.category.colorAndMarterialObj.map((colorAndMaterial) => {
      return (
        <li
          className={`material-color-item ${
            filter.materialsAndColors.includes(colorAndMaterial.id) && "selected"
          }`}
          key={colorAndMaterial.id}
          tooltip={
            colorAndMaterial.description.replace(".\\A ", ".\u000D\u000A\u000D\u000A") ||
            "Updating..."
          }
          onClick={() => handleSelectMaterialAndColor(colorAndMaterial)}
        >
          <button className="material-color-img-btn">
            <img
              src={require(`../Assets/Images/ProductMaterial/${colorAndMaterial.imageName}`)}
              alt={colorAndMaterial.name}
            />
          </button>
        </li>
      );
    });
  }

  return (
    <div className="category-filter">
      <div className="category-filter__item">
        <header>
          <h3 className="category-filter__title">Room</h3>
          <button
            className={`category-filter__btn ${showFilterList.room && "selected"}`}
            onClick={() => handleShowFilter("room")}
          >
            +
          </button>
        </header>
        <ul
          className={`category-filter__list category-filter__room-list ${
            showFilterList.room && "show-filter"
          }`}
        >
          {createListRoomItemElements()}
        </ul>
      </div>
      <div className="category-filter__item">
        <header>
          <h3 className="category-filter__title">Type</h3>
          <button
            className={`category-filter__btn ${showFilterList.type && "selected"}`}
            onClick={() => handleShowFilter("type")}
          >
            +
          </button>
        </header>
        <ul
          className={`category-filter__list category-filter__type-list ${
            showFilterList.type && "show-filter"
          }`}
        >
          {createListTypeItemElements()}
        </ul>
      </div>
      <div className="category-filter__item">
        <header>
          <h3 className="category-filter__title">Material & Color</h3>
          <button
            className={`category-filter__btn ${showFilterList.materialAndColor && "selected"}`}
            onClick={() => handleShowFilter("materialAndColor")}
          >
            +
          </button>
        </header>
        <ul
          className={`category-filter__list category-filter__material-and-color-list  ${
            showFilterList.materialAndColor && "show-filter"
          }`}
        >
          {createListMaterialAndColorItemElements()}
        </ul>
      </div>
    </div>
  );
}
