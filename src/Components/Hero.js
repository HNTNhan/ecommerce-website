import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Simple and Beautiful
            <br />
            Furniture.{" "}
          </h1>
          <Link className="hero__button" to="/category/living-room">
            Find one for you
          </Link>
        </div>
      </div>
    </section>
  );
}
