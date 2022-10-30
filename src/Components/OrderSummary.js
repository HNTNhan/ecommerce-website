export default function OrderSummary(props) {
  return (
    <div className="order-summary">
      <h3 className="order-summary__title">Order Summary</h3>
      <div className="order-summary__total">
        <p>Order Total:</p>
        <p>$5249</p>
      </div>
      <p className="order-summary__small-text">* Excluding delivery.</p>
      <button className="order-summary__checkout-btn">CHECKOUT</button>
      <p className="order-summary__small-text">
        Our Shopping cart reflects each item's most recent price. Price and availability is subject
        to change.
      </p>
    </div>
  );
}
