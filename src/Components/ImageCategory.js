import { Link } from "react-router-dom";
import { convertToSlug } from "../utilities";

export default function ImageCategory(props) {
  const imageCategoryItems = props.categories.map((category) => {
    return (
      <Link
        to={`/category/${convertToSlug(category.name)}`}
        key={category.id}
        className="image-category__item"
      >
        <h3 className="image-category__item-title">{category.name}</h3>
      </Link>
    );
  });

  return (
    <section className="image-category">
      <div className="container row">{imageCategoryItems}</div>
    </section>
  );
}
