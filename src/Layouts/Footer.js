export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__information row">
          <div className="footer__list-wrapper footer__help">
            <h4 className="footer__title">Help</h4>
            <ul>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">Start A Return Or Exchange (US)</a>
              </li>
              <li>
                <a href="#">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Current Promotions</a>
              </li>
              <li>
                <a href="#">Product Recalls</a>
              </li>
            </ul>
          </div>
          <div className="footer__list-wrapper footer__about-us">
            <h4 className="footer__title">About Us</h4>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">A Greater Good</a>
              </li>
              <li>
                <a href="#">Diversity & Inclusion</a>
              </li>
              <li>
                <a href="#">Stories</a>
              </li>
            </ul>
          </div>
          <div className="footer__list-wrapper footer__services">
            <h4 className="footer__title">Services</h4>
            <ul>
              <li>
                <a href="#">AnthroPerks</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">AnthroLiving Designer & Trade Program</a>
              </li>
              <li>
                <a href="#">Furniture: Guides & Services</a>
              </li>
              <li>
                <a href="#">Store Pickup & Collection Points</a>
              </li>
              <li>
                <a href="#">Klarna</a>
              </li>
            </ul>
          </div>
          <div className="footer__list-wrapper footer__connect">
            <h4 className="footer__title">Connect</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Stay Connected</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Styling Services</a>
              </li>
              <li>
                <a href="#">Request A Catalog</a>
              </li>
            </ul>
          </div>
          <div className="footer__list-wrapper footer__social">
            <ul>
              <li>
                <a href="#">
                  <img src={require("../Assets/Images/SocialIcon/facebook.png")} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={require("../Assets/Images/SocialIcon/instagram.png")} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={require("../Assets/Images/SocialIcon/pinterest.png")} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={require("../Assets/Images/SocialIcon/twitter.png")} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={require("../Assets/Images/SocialIcon/youtube.png")} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <span>Terms - </span>
          <span>Privacy - </span>
          <span>Accessibility Policy</span>
          <p>2022 © Thien Nhan.</p>
        </div>
      </div>
    </footer>
  );
}
