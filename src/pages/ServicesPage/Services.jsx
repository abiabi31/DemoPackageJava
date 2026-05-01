import React, { useRef } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Link,
} from "@mui/material";
import "./style.css";
import img from "../../assets/img/dark.avif";
import MailPopup from "../../utils/mail/MailPopup";
import { useState } from "react";
import flySound from "../../assets/img/fly.mp3";

const data = [
  {
    id: 1,
    category: "NURSERS",
    qualification: "BSC NURSERS",
    gender: "FEMALE",
    mandatory: "PROMETRIC",
    quantity: 0,
    salary: "450 KD",
  },
  {
    id: 2,
    category: "Nur",
    qualification: "IP SAFETY/NERONIE",
    gender: "FEMALE",
    mandatory: "import",
    quantity: 10,
    salary: "1000-7000 ARD",
  },
];

const Services = () => {
  const audioRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };
  const handlePlaneClick = (e) => {
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    audio.pause(); // stop if already playing
    audio.currentTime = 0; // restart
    audio.volume = 0.6;

    audio.play().catch((err) => {
      console.log("Play error:", err);
    });
  };
  return (
    <>
      <section className="contact-hero-banner">
        <img src={img} alt="Contact hero" className="contact-hero-image" />

        <div className="contact-hero-overlay">
          <h1>
            {" "}
            <h1>Our Services</h1>
          </h1>
        </div>

        {/* <div className="hero-wave" /> */}
      </section>{" "}
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 🌌 SKY BACKGROUND */}
        <Box className="sky">
          <div className="cloud cloud1">☁️</div>
          <div className="cloud cloud2">☁️</div>
          <div className="cloud cloud3">☁️</div>
          {/* <div className="plane">✈️</div> */}
          <div className="plane" onClick={handlePlaneClick}>
            ✈️
          </div>
          <audio ref={audioRef} preload="auto">
            <source src={flySound} type="audio/mpeg" />
          </audio>
        </Box>

        {/* ✨ TITLE (ONLY ONE TIME - FIXED) */}
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <Typography className="main-title">Services</Typography>
          <Box className="title-underline" />
          <Typography className="sub-title">Our Services</Typography>
        </Box>

        {/* 🏢 CARD SECTION */}
        <Box
          sx={{
            position: "absolute",
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            maxWidth: "600px",
            zIndex: 10,
            mt: 30,
          }}
        >
          <Box className="airport-card">
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "gold", mb: 2 }}
            >
              ✈️ Hotel
            </Typography>

            <Box sx={{ display: "grid", rowGap: "10px" }}>
              <Typography>
                <b>Category:</b> CATEGORY
              </Typography>
              <Typography>
                <b>Qualification:</b> QUALIFICATION
              </Typography>
              <Typography>
                <b>Gender:</b> GENDER
              </Typography>
              <Typography>
                <b>Mandatory:</b> MANDATORY
              </Typography>
              <Typography>
                <b>Quantity:</b> QUANTITY
              </Typography>
              <Typography>
                <b>Salary:</b> SALARY
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="airport-card1">
            <Paper className="table-container">
              <Table>
                <TableHead>
                  <TableRow className="table-header">
                    <TableCell>S.No</TableCell>
                    <TableCell>CATEGORY</TableCell>
                    <TableCell>QUALIFICATION</TableCell>
                    <TableCell>GENDER</TableCell>
                    <TableCell>MANDATORY</TableCell>
                    <TableCell>QUANTITY</TableCell>
                    <TableCell>SALARY</TableCell>
                    <TableCell>MoreInfo</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id} className="table-row">
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.qualification}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.mandatory}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.salary}</TableCell>
                      <TableCell>
                        <Link
                          // href="#"
                          onClick={() => handleOpen(row)}
                          className="apply-link"
                        >
                          Apply
                        </Link>{" "}
                        <Link
                          // href="#"
                          onClick={() => handleOpen(row)}
                          className="new-link"
                        >
                          New
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Box>
        </Box>
      </Box>
      <MailPopup
        open={open}
        selectedRow={selectedRow}
        setOpen={setOpen}
        setSelectedRow={setSelectedRow}
      />
    </>
  );
};

export default Services;
