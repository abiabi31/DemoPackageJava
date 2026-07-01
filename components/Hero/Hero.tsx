import { motion } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import Button from "../Button/Button";
import "./Hero.css";

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero__grid">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero__content"
      >
        <div className="hero__badge">
          <span className="hero__badge-dot" /> Premium Siddha Care
        </div>
        <div className="hero__copy">
          <p className="hero__eyebrow">AMUTHA SIDHA MARUTHUVAM</p>
          <h1 className="hero__title">
            Natural Healing through Siddha Medicine and Yoga
          </h1>
          <p className="hero__description">
            A luxury healing center blending traditional herbal treatments,
            gentle yoga therapy, and compassionate care for modern wellness.
          </p>
        </div>
        <div className="hero__actions">
          <Button href="#services" className="button--wide">
            Book Appointment <FiArrowRight />
          </Button>
          <Button href="#blog" variant="secondary" className="button--wide">
            Read Blog
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="hero__panel"
      >
        <div className="hero__circle" />
        <div className="hero__image-shell">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
            alt="Doctor consultation"
            className="hero__image"
            loading="lazy"
          />
          <div className="hero__image-caption">
            <div>
              <p className="hero__caption-label">Herbal Doctor</p>
              <h2 className="hero__caption-title">Dr. Amutha</h2>
            </div>
            <p className="hero__caption-copy">
              Leading Siddha specialist with experience in natural healing, yoga
              therapy and wellness restoration.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="hero__footer">
      <a href="#about" className="hero__scroll-link">
        Scroll to learn
        <FiChevronDown className="hero__scroll-icon" />
      </a>
    </div>
  </section>
);

export default Hero;
