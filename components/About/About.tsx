import { motion } from "framer-motion";
import { statsData } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";

const About = () => (
  <section id="about" className="about">
    <SectionTitle
      title="Hospital Story & Natural Healing"
      subtitle="About Us"
      description="Amutha Sidha Maruthuvam & Yoga Health Center combines the warmth of Siddha medicine with luxury wellness design for a premium patient experience."
    />
    <div className="about__grid">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="about__visual"
      >
        <div className="about__glow" />
        <div className="about__image-shell">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80"
            alt="Healing herbs"
            className="about__image"
            loading="lazy"
          />
        </div>
      </motion.div>

      <div className="about__details">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about__card"
        >
          <p className="about__eyebrow">Traditional Siddha Medicine</p>
          <h3 className="about__heading">
            Holistic healing with natural herbs, yoga and personal care.
          </h3>
          <p className="about__copy">
            Our center specializes in safe, effective treatments using
            time-tested Siddha principles, guided yoga therapy, and support for
            modern lifestyles. Every plan is designed to restore strength,
            clarity and balance.
          </p>
          <div className="about__highlights">
            {[
              "Natural Herbal Treatments",
              "Holistic Healing",
              "Experienced Doctor",
              "Affordable Treatment",
            ].map((item) => (
              <div key={item} className="about__feature">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="about__stats">
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6 }}
              className="about__stat-card"
            >
              <p className="about__stat-value">{stat.value}</p>
              <p className="about__stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
