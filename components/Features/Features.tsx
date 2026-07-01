import { motion } from "framer-motion";
import {
  FiDroplet,
  FiHeart,
  FiShield,
  FiUsers,
  FiSmile,
  FiZap,
} from "react-icons/fi";
import { featureItems } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Features.css";

const icons = [FiDroplet, FiSmile, FiShield, FiUsers, FiHeart, FiZap];

const Features = () => (
  <section id="features" className="features">
    <SectionTitle
      title="Premium Care Features"
      subtitle="Why Choose Us"
      description="Experience a luxury healing environment with glassmorphism design, thoughtful movement, and trusted Siddha expertise."
    />
    <div className="features__grid">
      {featureItems.map((feature, index) => {
        const Icon = icons[index] || FiDroplet;
        return (
          <motion.article
            key={feature.title}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.99 }}
            className="feature-card"
          >
            <div className="feature-card__icon">
              <Icon size={22} />
            </div>
            <span className="feature-card__badge">{feature.badge}</span>
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__description">{feature.description}</p>
          </motion.article>
        );
      })}
    </div>
  </section>
);

export default Features;
