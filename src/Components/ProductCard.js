import { nanoid } from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { convertToSlug } from "../utilities";

export default function ProductCart(props) {
  const styles =
    props.slideIndex >= 0
      ? {
          transform: `translateX(${-100 * props.slideIndex}%)`,
        }
      : {};

  // console.log(props.data);
  const materialAndColorElements = props.data.materials_colors.map((materialColor) => {
    return (
      <img
        key={materialColor.id}
        className="product-card__material-color__item"
        src={require(`../Assets/Images/ProductMaterial/${materialColor.imageName}`)}
        alt={materialColor.name}
        title={materialColor.name}
      />
    );
  });

  return (
    <Link to={`/product/${convertToSlug(props.data.name)}`} className="product-card" style={styles}>
      <img
        className="product-card__img"
        src={require("../Assets/Images/ProductImage/" +
          props.data.name.replaceAll(" ", "") +
          "/" +
          props.data.default_image)}
        alt="product"
      />
      <h3 className="product-card__title">{props.data.name}</h3>
      {props.data.sale ? (
        <del>
          <p className="product-card__price">{props.data.price}$</p>
        </del>
      ) : (
        <p className="product-card__price">{props.data.price}$</p>
      )}
      {props.data.sale && <p className="product-card__sale">{props.data.sale}$</p>}
      <ul className="product-card__material-color">{materialAndColorElements}</ul>
    </Link>
  );
}
