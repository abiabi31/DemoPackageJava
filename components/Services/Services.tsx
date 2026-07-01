import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowRight,
  FiHeart,
  FiZap,
  FiSmile,
} from "react-icons/fi";
import { GiStethoscope } from "react-icons/gi";
import { servicesData } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Services.css";

const serviceIcons = [
  FiActivity,
  GiStethoscope,
  FiHeart,
  FiZap,
  FiSmile,
  FiArrowRight,
];

const Services = () => (
  <section id="services" className="services">
    <SectionTitle
      title="Innovative Siddha Services"
      subtitle="Our Treatments"
      description="Explore natural therapies designed to relieve pain, restore mobility, and support holistic wellbeing."
    />
    <div className="services__grid services__grid--featured">
      {servicesData.slice(0, 4).map((service, index) => {
        const Icon = serviceIcons[index] || FiActivity;
        return (
          <motion.article
            key={service.title}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="service-card"
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-card__image"
              loading="lazy"
            />
            <div className="service-card__body">
              <div className="service-card__icon">
                <Icon size={20} />
              </div>
              <p className="service-card__category">{service.category}</p>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.description}</p>
              <a href="#contact" className="service-card__link">
                Learn More <FiArrowRight />
              </a>
            </div>
          </motion.article>
        );
      })}
    </div>

    <div className="services__grid services__grid--compact">
      {servicesData.slice(4).map((service) => (
        <motion.div
          key={service.title}
          whileHover={{ y: -6 }}
          className="service-summary-card"
        >
          <p className="service-summary-card__category">{service.category}</p>
          <h4 className="service-summary-card__title">{service.title}</h4>
          <p className="service-summary-card__text">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
