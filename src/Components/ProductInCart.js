import QuantityInputGroup from "../Components/QuantityInputGroup";

export default function ProductInCart(props) {
  return (
    <div className="product-in-cart">
      <table className="product-in-cart__table">
        <thead className="product-in-cart__header">
          <tr>
            <th></th>
            <th>Product</th>
            <th>Item Price</th>
            <th>Quantity</th>
            <th>Item total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </td>
            <td className="product-in-cart__product-info">
              <img
                className="product-in-cart__product-image"
                src={require("../Assets/Images/ProductImage/Product-1-1.jpg")}
                alt="product 1"
              />
              <div>
                <h3 className="product-in-cart__product-title">Milo Sleeper Sectional</h3>
                <div className="product-in-cart__product-orientation">
                  <img
                    src={require("../Assets/Images/ProductOrientation/Left-Hand-Facing.jpg")}
                    alt="product orientation left"
                  />
                  <p>Left-Hand-Facing</p>
                </div>
                <div className="product-in-cart__product-material">
                  <img
                    src={require("../Assets/Images/ProductMaterial/Alesund.jpg")}
                    alt="modern felt alesund"
                  />
                  <p>Alesund</p>
                </div>
              </div>
            </td>
            <td className="product-in-cart__table__item-price">
              <p>$5249</p>
            </td>
            <td>
              <QuantityInputGroup small={true} />
            </td>
            <td className="product-in-cart__table__item-total">
              <p>$5249</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
