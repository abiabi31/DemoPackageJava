import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { blogsData } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Blogs.css";

const Blogs = () => (
  <section id="blog" className="blogs">
    <SectionTitle
      title="Insights & Wellness Stories"
      subtitle="Blog"
      description="Read the latest guidance on Siddha medicine, yoga routines, natural immunity and healthy living."
    />
    <div className="blogs__grid">
      {blogsData.map((blog) => (
        <motion.article
          key={blog.title}
          whileHover={{ y: -8 }}
          className="blog-card"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-card__image"
            loading="lazy"
          />
          <div className="blog-card__content">
            <p className="blog-card__category">{blog.category}</p>
            <div className="blog-card__meta">
              <span>{blog.date}</span>
              <span className="blog-card__dot" />
              <span>{blog.author}</span>
            </div>
            <h3 className="blog-card__title">{blog.title}</h3>
            <p className="blog-card__copy">{blog.description}</p>
            <a href="#blog" className="blog-card__link">
              Read More <FiBookOpen />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Blogs;
