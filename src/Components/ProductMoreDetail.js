export default function ProductMoreDetail({ product }) {
  const detailElements = product.details.map((detail, index) => (
    <li key={index}>
      <p>{detail}</p>
    </li>
  ));

  return (
    <section className="product-more-detail">
      <div className="container row">
        <div className="product-more-detail__overview">
          <h3 className="product-more-detail__title">Overview</h3>
          <p>{product.overview}</p>
        </div>
        <div className="product-more-detail__detail">
          <h3 className="product-more-detail__title">Detail</h3>
          <ul>{detailElements}</ul>
        </div>
        <div className="product-more-detail__dimensions">
          <h3 className="product-more-detail__title">Dimensions</h3>
          <div className="product-more-detail__dimensions-img">
            <img
              src={require(`../Assets/Images/ProductDimension/${product.dimension_image}`)}
              alt={product.dimension_image}
            />
            <a
              href={require(`../Assets/Images/ProductDimension/${product.dimension_image}`)}
              target="_blank"
              rel="noreferrer"
            >
              Zoom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
