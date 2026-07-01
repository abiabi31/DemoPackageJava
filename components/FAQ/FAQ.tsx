import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { faqData } from "../../utils/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <SectionTitle
        title="Common Questions Answered"
        subtitle="FAQ"
        description="Get quick answers about Siddha treatments, yoga therapy, timelines and natural medicine."
      />
      <div className="faq__list">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={item.question} className="faq__item">
              <button
                type="button"
                className="faq__question"
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <p>{item.question}</p>
                <span className="faq__toggle-icon">
                  {isActive ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              {isActive && <div className="faq__answer">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
