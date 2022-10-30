export default function CategoryDescription({ category }) {
  return (
    <section className="category-descripion">
      <div className="container">
        <h1 className="category-descripion__title">{category ? category.name : ""}</h1>
        <p className="category-descripion__text">{category ? category.description : ""}</p>
      </div>
    </section>
  );
}
