import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const ContactForm = () => {
  const TO_EMAIL = "asabi030110@gmail.com";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🚫 STOP page refresh

    var messageBody = `
Name: ${form.name} 
Email: ${form.email} 
Phone: ${form.phone} 
Message: ${form.message}
`;

    const templateParams = {
      subject: "For Job vacancy info",
      from_name: form.name,
      message: messageBody,
    };

    console.log("📤 Sending email with params:", templateParams);

    emailjs
      .send(
        "service_pjjxus6",
        "template_tql40oq",
        templateParams,
        "kZ526cYx2CWvju_O3",
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("❌ ERROR:", error);
        alert("❌ Failed to send message");
      });
  };
  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus("");

  //   const { name, email, phone, message } = form;

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
    <section className="contact-form-section-v2">
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
            <label>Phone</label>
            <input
              type="text"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
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
    </section>
  );
};

export default ContactForm;
