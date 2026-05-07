import React, { useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import heroImg from "../../assets/img/5.jpeg";
import img1 from "../../assets/img/a.jpeg";
import img2 from "../../assets/img/b.jpeg";
import img3 from "../../assets/img/c.jpeg";
import img4 from "../../assets/img/d.jpeg";
import img5 from "../../assets/img/see.jpg";
import img6 from "../../assets/img/4.jpeg";
import img7 from "../../assets/img/n7.jpeg";
import img8 from "../../assets/img/n8.jpeg";
import img9 from "../../assets/img/n9.jpeg";
import img10 from "../../assets/img/n10.jpeg";
import img11 from "../../assets/img/n11.jpeg";
import img12 from "../../assets/img/n3.jpeg";

import img from "../../assets/img/dark.avif";
import ContactForm from "../../utils/ContactForm";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
import * as Icons from "@mui/icons-material";

const LocationOnIcon = Icons.LocationOn;
const PhoneIcon = Icons.Phone;
const EmailIcon = Icons.Email;
const ContactPage = () => {
  const TO_EMAIL = "asabi030110@gmail.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const faqList = [
    {
      title: "Can I book a custom trip?",
      text: "Yes, you can send your preferred destination, date, and budget through the form below.",
    },
    {
      title: "Do you have social media?",
      text: "Yes, we are active on Instagram, Facebook, and YouTube for travel updates and stories.",
    },
    {
      title: "How fast do you reply?",
      text: "We usually reply as soon as possible. Sometimes it may take a little longer during travel days.",
    },
    {
      title: "Can I ask for destination advice?",
      text: "Yes, you can ask for travel suggestions, best places, hotel ideas, and trip planning help.",
    },
    {
      title: "Do you cover group tours?",
      text: "Yes, group tour and family trip enquiries are welcome through the contact form.",
    },
    {
      title: "Can I collaborate with you?",
      text: "Yes, for promotions, partnerships, and travel collaborations, please send a message below.",
    },
  ];

  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus("");

  //   const { name, email, subject, message } = form;

  //   if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
  //     setStatus("Please fill all fields.");
  //     return;
  //   }

  //   if (!isValidEmail(email)) {
  //     setStatus("Enter a valid email address.");
  //     return;
  //   }

  //   setLoading(true);
  //   setStatus("Sending...");

  //   emailjs
  //     .send(
  //       "service_abi123",
  //       "template_sn5qc6n",
  //       {
  //         name,
  //         email,
  //         subject,
  //         message,
  //         mail: TO_EMAIL,
  //       },
  //       "NaCmRdXc4zbXTWQxF",
  //     )
  //     .then(() => {
  //       setStatus("Message sent successfully ✅");
  //       setForm({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });
  //     })
  //     .catch(() => {
  //       setStatus("Failed to send ❌");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  return (
    <div className="travel-contact-page">
      <section className="contact-hero-banner">
        <img src={img} alt="Contact hero" className="contact-hero-image" />

        <div className="contact-hero-overlay">
          <p className="hero-top-text">Let’s Connect</p>
          <h1>CONTACT</h1>
          <p className="hero-description">
            Every message starts a new conversation, a new idea, and sometimes a
            new journey.
          </p>

          <div className="hero-buttons">
            <a href="#contact-form" className="hero-btn primary-btn">
              Contact Now
            </a>
            <Link to="/about" className="hero-btn secondary-btn">
              About Me
            </Link>
          </div>
        </div>

        {/* <div className="hero-wave" /> */}
      </section>

      <section className="contact-intro-section" id="contact-form">
        <p className="mini-heading">GET IN TOUCH</p>

        <div className="title-row">
          <span className="line" />
          <h2>Contact Form</h2>
          <span className="line" />
        </div>

        <p className="intro-text">I would love to hear from you.</p>

        <p className="intro-text muted">
          Whether you have a question, a project idea, a collaboration request,
          or just want to say hello, feel free to send a message through the
          form below.
        </p>

        <p className="intro-text muted">
          Want to know more about me before reaching out?
          <Link to="/about" className="about-inline-link">
            {" "}
            Visit the About Page
          </Link>
        </p>
      </section>
      {/* <section className="contact-form-section-v2">
        <div className="contact-form-card-v2">
          <form className="contact-form-v2" onSubmit={handleSubmit}>
            <div className="form-group-v2">
              <label>Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="form-group-v2">
              <label>Your email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div className="form-group-v2">
              <label>Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
              />
            </div>

            <div className="form-group-v2">
              <label>Your message</label>
              <textarea
                rows="6"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn-v2" disabled={loading}>
              {loading ? "SENDING..." : "SUBMIT"}
            </button>

            {status && (
              <p
                className={`status-v2 ${
                  status.includes("success")
                    ? "success"
                    : status.includes("Failed")
                      ? "error"
                      : "info"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section> */}
      <div className="contact-main">
        {/* LEFT → Form */}
        <div className="left-side">
          <ContactForm />
        </div>

        {/* RIGHT → Contact Card */}
        <div className="right-side">
          <div className="contact-card">
            <div className="contact-item">
              <LocationOnIcon className="icon" />
              <p className="text">Karungal</p>
              <p className="sub-text">Kanniyakumari, India</p>
            </div>

            <div className="contact-item">
              <PhoneIcon className="icon" />
              <h3 className="title">Mobile</h3>
              <p className="sub-text">+91 9952687642</p>
            </div>

            <div className="contact-item">
              <EmailIcon className="icon" />
              <h3 className="title">Email</h3>
              <p className="sub-text">halfwayconsultant@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="faq-section-v2">
        <p className="mini-heading">FREQUENTLY ASKED QUESTIONS</p>
        <div className="title-row faq-title-row">
          <h2>FAQs</h2>
          <span className="line" />
        </div>

        <div className="faq-grid-v2">
          {faqList.map((item, index) => (
            <div className="faq-card-v2" key={index}>
              <div className="faq-icon-v2">✈</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="gallery-strip-section">
        <div className="gallery-strip-title">INSTAGRAM</div>
        <div className="gallery-strip">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Travel ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
