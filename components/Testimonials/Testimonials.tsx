import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { testimonialsData } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Testimonials.css";

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <SectionTitle
      title="Trusted Patient Reviews"
      subtitle="Testimonials"
      description="Patients share how Siddha medicine and yoga therapy improved their health and comfort."
    />
    <div className="testimonials__grid">
      {testimonialsData.map((item) => (
        <motion.article
          key={item.name}
          whileHover={{ y: -6 }}
          className="testimonial-card"
        >
          <div className="testimonial-card__stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <FiStar key={index} className="testimonial-card__star" />
            ))}
          </div>
          <p className="testimonial-card__quote">“{item.quote}”</p>
          <div className="testimonial-card__profile">
            <p className="testimonial-card__name">{item.name}</p>
            <p className="testimonial-card__meta">{item.meta}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Testimonials;
