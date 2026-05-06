import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ clear old message immediately
    setMessage("");
    setStatus("");

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    setErrors(newErrors);

    // stop if validation fails
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    const messageBody = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message || "No message provided"}
`;

    const templateParams = {
      subject: "For Job vacancy info",
      from_name: form.name,
      message: messageBody,
    };

    emailjs
      .send(
        "service_pjjxus6",
        "template_tql40oq",
        templateParams,
        "kZ526cYx2CWvju_O3",
      )
      .then(() => {
        setStatus("success");
        setMessage("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setErrors({});

        // ✅ auto hide after 3 sec
        setTimeout(() => {
          setMessage("");
          setStatus("");
        }, 3000);
      })
      .catch(() => {
        setStatus("error");
        setMessage("Failed to send message");

        // auto hide error also
        setTimeout(() => {
          setMessage("");
          setStatus("");
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-form-section-v2">
      <div className="contact-form-card-v2">
        <form className="contact-form-v2" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="form-group-v2">
            <label>Your name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div className="form-group-v2">
            <label>Your email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* PHONE */}
          <div className="form-group-v2">
            <label>Phone *</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                handleChange("phone", onlyNums);
              }}
              maxLength={10}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          {/* MESSAGE */}
          <div className="form-group-v2">
            <label>Your message (optional)</label>
            <textarea
              rows="6"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          {/* SUBMIT */}
          <button type="submit" className="submit-btn-v2" disabled={loading}>
            {loading ? "SENDING..." : "SUBMIT"}
          </button>

          {/* SUCCESS / ERROR MESSAGE */}
          {message !== "" && (
            <p
              className={`form-message ${
                status === "success" ? "success" : "error"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
