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
import img1 from "../../assets/img/3.jpeg";
import img2 from "../../assets/img/1.jpeg";
import img3 from "../../assets/img/3.jpeg";
import img4 from "../../assets/img/7.jpeg";
import img5 from "../../assets/img/images.jpeg";
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
const data1 = [
  {
    id: 1,
    category: "MAFUTY INGINKO",
    qualification: "RCH/DIP+NEBO",
    // gender: "FEMALE",
    // mandatory: "PROMETRIC",
    quantity: 10,
    salary: "	7000 - 8000 AED",
  },
  {
    id: 2,
    category: "SAFETY OFFICERS",
    qualification: "IP SAFETY/NERONIE",
    // gender: "FEMALE",
    // mandatory: "import",
    quantity: 10,
    salary: "	1000-7000 ARD",
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
  const clouds = Array.from({ length: 10 });

  return (
    <>
      <Box className="page-wrapper">
        <section className="contact-hero-banner">
          <img src={img} alt="Contact hero" className="contact-hero-image" />

          <div className="contact-hero-overlay">
            <h1>Our Services</h1>
          </div>
        </section>
        <Box className="gallery-container">
          <Box className="gallery-card">
            <img src={img1} alt="img1" />
          </Box>

          <Box className="gallery-card">
            <img src={img2} alt="img2" />
          </Box>

          <Box className="gallery-card">
            <img src={img3} alt="img3" />
          </Box>

          <Box className="gallery-card">
            <img src={img4} alt="img4" />
          </Box>
        </Box>

        {/* SKY PAGE */}
        <Box className="sky-page">
          {/* 🌌 SKY BACKGROUND */}
          <Box className="sky-bg">
            {clouds.map((_, i) => (
              <div
                key={i}
                className={`cloud cloud${(i % 5) + 1}`}
                style={{
                  top: `${10 + i * 8}%`,
                  animationDelay: `${i * 2}s`,
                }}
              >
                ☁️
              </div>
            ))}

            <div className="plane" onClick={handlePlaneClick}>
              ✈️
            </div>

            <audio ref={audioRef} preload="auto">
              <source src={flySound} type="audio/mpeg" />
            </audio>
          </Box>

          {/* CONTENT */}
          <Box className="content-layer">
            {/* TITLE */}
            <Box className="title-box">
              <Typography className="main-title">Services</Typography>
              <Box className="title-underline" />
              <Typography className="sub-title">Our Services</Typography>
            </Box>

            {/* CARD 1 */}
            <Box className="airport-card">
              <Typography
                variant="h4"
                sx={{ textAlign: "center", color: "gold" }}
              >
                ✈️ Hotel
              </Typography>

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
                <b>Salary:</b> SALARY
              </Typography>
            </Box>

            {/* TABLE 1 */}
            <Paper className="table-container">
              <Typography>Hotel</Typography>
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

            {/* TABLE 2 */}
            <Paper className="table-container">
              <Typography>WANTED FOR NURSE - KUWAIT</Typography>
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

            {/* TABLE 3 */}
            <Paper className="table-container">
              <Table>
                <TableHead>
                  <TableRow className="table-header">
                    <TableCell>S.No</TableCell>
                    <TableCell>CATEGORY</TableCell>
                    <TableCell>QUALIFICATION</TableCell>

                    <TableCell>QUANTITY</TableCell>
                    <TableCell>SALARY</TableCell>
                    <TableCell>MoreInfo</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data1.map((row) => (
                    <TableRow key={row.id} className="table-row">
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.qualification}</TableCell>

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

        <MailPopup
          open={open}
          selectedRow={selectedRow}
          setOpen={setOpen}
          setSelectedRow={setSelectedRow}
        />
      </Box>
    </>
  );
};

export default Services;
