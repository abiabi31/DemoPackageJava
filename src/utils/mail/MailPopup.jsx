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

    if (setSelectedRow) {
      setSelectedRow(null);
    }
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // =========================
  // HANDLE INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SEND EMAIL
  // =========================
  const sendEmail = () => {
    const messageBody = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}

${
  selectedRow
    ? `
Job Details:
Category: ${selectedRow?.category || ""}
Qualification: ${selectedRow?.qualification || ""}
Gender: ${selectedRow?.gender || ""}
Salary: ${selectedRow?.salary || ""}
`
    : ""
}
`;

    const templateParams = {
      subject: "For Job Vacancy Info",
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

        handleClose();
      })
      .catch((error) => {
        console.log("❌ ERROR:", error);

        alert("❌ Failed to send message");
      });
  };

  // =========================
  // UI
  // =========================
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Send us a message
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1 }}>
          {/* Optional Job Details */}
          {selectedRow && (
            <Box
              sx={{
                p: 2,
                mb: 2,
                borderRadius: "12px",
                background: "rgba(0,0,0,0.04)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Job Details
              </Typography>

              <Typography>Category: {selectedRow?.category}</Typography>

              <Typography>
                Qualification: {selectedRow?.qualification}
              </Typography>

              <Typography>Gender: {selectedRow?.gender}</Typography>

              <Typography>Salary: {selectedRow?.salary}</Typography>
            </Box>
          )}

          {/* NAME */}
          <TextField
            fullWidth
            margin="dense"
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          {/* EMAIL */}
          <TextField
            fullWidth
            margin="dense"
            label="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {/* PHONE */}
          <TextField
            fullWidth
            margin="dense"
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          {/* MESSAGE */}
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

          {/* BUTTONS */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>

            <Button variant="contained" onClick={sendEmail}>
              Send Message
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
