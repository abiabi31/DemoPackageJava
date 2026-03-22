import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import img1 from "../../assets/img/images.jpeg";
import img2 from "../../assets/img/4.jpeg";
import img4 from "../../assets/img/5.jpeg";
import img5 from "../../assets/img/6.jpeg";
import img6 from "../../assets/img/7.jpeg";
import { Box } from "@mui/material";
import HTMLFlipBook from "react-pageflip";

const ContactPage = () => {
  const TO_EMAIL = "asabi030110@gmail.com";
  const bookRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    place: "",
  });

  const [status, setStatus] = useState("");

  const isValidPhone = (value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 7;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    const { name, phone, place, mail } = form;

    if (!name || !phone || !place) {
      setStatus("Please fill all fields.");
      return;
    }

    if (!isValidPhone(phone)) {
      setStatus("Enter valid phone number.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_abi123", // 🔴 Replace with your Service ID
        "template_sn5qc6n", // 🔴 Replace with your Template ID
        {
          name: name,
          phone: phone,
          place: place,
          mail: TO_EMAIL, // ✅ Send to your mail
        },
        "NaCmRdXc4zbXTWQxF", // 🔴 Replace with your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setForm({ name: "", phone: "", place: "" });
        },
        () => {
          setStatus("Failed to send ❌");
        },
      );
  };

  const pages1 = [
    {
      image: img4,
      title: "Welcome Aboard",
      content: "Get ready to explore the world beyond horizons ✈️",
    },
    {
      title: "Destination 1",
      content: "Every journey begins with a single step into the unknown.",
      image: img1,
    },
    {
      title: "Mountain Escape",
      content: "Feel the fresh air and discover peace in the mountains.",
      image: img2,
    },
    {
      title: "Ocean Dreams",
      content: "Let the waves wash away your worries and inspire your soul.",
      image: img6,
    },
    {
      title: "Next Adventure",
      content: "The world is waiting — where will you travel next?",
      image: img5,
    },
  ];
  // 🔥 Loop Back Function
  const handleFlip = (e) => {
    const currentPage = e.data;
    const totalPages = pages1.length;

    if (currentPage === totalPages - 1) {
      setTimeout(() => {
        bookRef.current.pageFlip().flip(0); // Back to first page
      }, 600);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!bookRef.current) return;

      const pageFlip = bookRef.current.pageFlip();
      const currentPage = pageFlip.getCurrentPageIndex();
      const totalPages = pages1.length;

      if (currentPage < totalPages - 1) {
        pageFlip.flipNext();
      } else {
        pageFlip.flip(0);
      }
    }, 5000); // 🔥 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="contact-layout">
        <div className="contact-page">
          <section className="contact-form-section">
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send Us a Message</h2>

              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>

                <label className="field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 9876543210"
                  />
                </label>

                <label className="field">
                  <span>Place</span>
                  <input
                    type="text"
                    value={form.place}
                    onChange={(e) =>
                      setForm({ ...form, place: e.target.value })
                    }
                    placeholder="Travel place"
                  />
                </label>

                <button type="submit">Submit</button>
                {status && <p>{status}</p>}
              </form>
            </div>
          </section>
        </div>

        {/* <div className="book-right">
          <Box>
            <HTMLFlipBook
              width={400}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={600}
              minHeight={400}
              maxHeight={700}
              maxShadowOpacity={0.7}
              showCover={true}
              mobileScrollSupport={true}
              className="book"
              ref={bookRef}
              onFlip={handleFlip}
            >
              {pages1.map((page, index) => (
                <Box key={index} className="page black-gold-page">
                  {page.image && (
                    <img
                      src={page.image}
                      alt={page.title || "Book Page"}
                      className="page-img"
                    />
                  )}
                  {page.title && <h2>{page.title}</h2>}
                  {page.content && <p>{page.content}</p>}
                </Box>
              ))}
            </HTMLFlipBook>
          </Box>
        </div> */}
      </div>
    </>
  );
};

export default ContactPage;
