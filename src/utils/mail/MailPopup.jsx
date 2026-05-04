import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export default function MailPopup({
  open,
  selectedRow,
  setOpen,
  setSelectedRow,
}) {
  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  // ✅ Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Send Email
  // const sendEmail = () => {
  //   const templateParams = {
  //     from_name: form.name, // ✅ IMPORTANT
  //     email: form.email, // ✅ IMPORTANT
  //     phone: form.phone, // ✅ IMPORTANT
  //     message: form.message, // ✅ IMPORTANT
  //   };
  //   console.log("📤 Sending email with params:", templateParams); // ✅ Debug log
  //   emailjs
  //     .send(
  //       "service_jnhihzk", // your Service ID
  //       "template_sn5qc6n", // your Template ID
  //       templateParams,
  //       "NaCmRdXc4zbXTWQxF", // your Public Key
  //     )
  //     .then(() => {
  //       alert("✅ Message sent successfully!");
  //       setForm({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //       });
  //       handleClose();
  //     })
  //     .catch((error) => {
  //       console.log("❌ ERROR:", error);
  //       alert("❌ Failed to send message");
  //     });
  // };

  const sendEmail = () => {
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
    console.log("📤 Sending email with params:", templateParams); // ✅ Debug log
    emailjs
      .send(
        "service_pjjxus6", // your Service ID
        "template_tql40oq", // your Template ID
        templateParams,
        "kZ526cYx2CWvju_O3", // your Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        handleClose();
      })
      .catch((error) => {
        console.log("❌ ERROR:", error);
        alert("❌ Failed to send message");
      });
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Send us a message</DialogTitle>

      <DialogContent>
        {selectedRow && (
          <Box sx={{ mt: 1 }}>
            <Typography sx={{ mb: 2 }}>
              Details of {selectedRow.category}
            </Typography>

            <TextField
              fullWidth
              margin="dense"
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="dense"
              label="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="dense"
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />

            <TextField
              fullWidth
              margin="dense"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
            />

            <Box sx={{ mt: 2, textAlign: "right" }}>
              <Button onClick={handleClose}>Cancel</Button>

              <Button variant="contained" onClick={sendEmail}>
                Send Message
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
