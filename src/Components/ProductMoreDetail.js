export default function ProductMoreDetail(propss) {
  return (
    <section className="product-more-detail">
      <div className="container row">
        <div className="product-more-detail__overview">
          <h3 className="product-more-detail__title">Overview</h3>
          <p>
            The sleek and flat profile of the Milo Sleeper Sectional marries sophisticated style
            with casual comfort. Milo's subtle curves of the padded armrest add visual elegance
            while delivering plush and stable support for the spacious seating. Milo features a
            modern design that can be easily converted into a spacious bed, perfect for when you
            have guests over. Much like the grandeur of Italian design, Milo is especially suited
            for large luxury spaces as the design of the Milo is formed with more width than the
            average sofa, providing an overall grander feel for your home.
          </p>
        </div>
        <div className="product-more-detail__detail">
          <h3 className="product-more-detail__title">Detail</h3>
          <ul>
            <li>
              <p>Kiln-dried hardwood frame w/ doweled joints & reinforced corner blocks</p>
            </li>
            <li>
              <p>Soft-padded frame made with polyurethane foam wrapped in polyester fiber</p>
            </li>
            <li>
              <p>3-layer high-density foam cushioning topped w/ premium 100% goose feathers</p>
            </li>
            <li>
              <p>8 gauge sinuous spring construction</p>
            </li>
            <li>
              <p>Square throw pillows not included, sold separately here</p>
            </li>
            <li>
              <p>Round, low profile solid stainless steel legs</p>
            </li>
            <li>
              <p>Light assembly required. Only legs are detached for your convenience</p>
            </li>
            <li>
              <p>Connectors not included/compatible for this collection</p>
            </li>
          </ul>
        </div>
        <div className="product-more-detail__dimensions">
          <h3 className="product-more-detail__title">Dimensions</h3>
          <div>
            <img
              src={require("../Assets/Images/ProductDimension/product-1.jpg")}
              alt="product dimension"
            />
            <button>Zoom</button>
          </div>
        </div>
      </div>
    </section>
  );
}
