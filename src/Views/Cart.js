import ProductInCart from "../Components/ProductInCart";
import OrderSummary from "../Components/OrderSummary";

import "../Assets/Styles/product-in-cart.css";
import "../Assets/Styles/order-summary.css";
import "../Assets/Styles/cart.css";

export default function Cart(props) {
  return (
    <section className="cart">
      <div className="container row">
        <ProductInCart />
        <OrderSummary />
      </div>
    </section>
  );
}
