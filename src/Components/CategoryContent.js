import CategoryFilter from "../Components/CategoryFilter";
import ProductList from "../Components/ProductsList";

export default function CategoryContent(props) {
  return (
    <section className="category-content">
      <div className="container row">
        <CategoryFilter {...props} />
        <ProductList {...props} />
      </div>
    </section>
  );
}
