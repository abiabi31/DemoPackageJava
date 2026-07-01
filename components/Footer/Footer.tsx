import {
  FiFacebook,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiSend,
  FiYoutube,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__top">
        <div className="footer__contact">
          <p className="footer__eyebrow">
            Amutha Sidha Maruthuvam & Yoga Health Center
          </p>
          <h3 className="footer__heading">Contact & Visit Us</h3>
          <p className="footer__description">
            Amutha Nagar, Naduthery, Karungal, Nagercoil, Tamil Nadu
          </p>
          <div className="footer__actions">
            <a
              href="tel:9442079012"
              className="footer__action-link footer__phone-link"
            >
              <FiPhone /> 94420 79012
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="footer__action-link footer__map-link"
            >
              <FiMapPin /> Google Maps
            </a>
          </div>
        </div>
        <div className="footer__panel">
          <p className="footer__eyebrow">Stay connected</p>
          <div className="footer__details">
            <p>
              <FiSend /> enquiries@amuthayoga.com
            </p>
            <p>
              <FiPhone /> 94420 79012
            </p>
          </div>
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <FiFacebook />
            </a>
            <a href="#" className="footer__social-link">
              <FiInstagram />
            </a>
            <a href="#" className="footer__social-link">
              <FiYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © 2026 Amutha Sidha Maruthuvam & Yoga Health Center. All rights
          reserved.
        </p>
        <p>Designed for premium care with modern Siddha wellness.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
