import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import img1 from "../../assets/img/images.jpeg";
import img2 from "../../assets/img/download3.jpeg";
import img3 from "../../assets/img/download2.jpeg";
import img4 from "../../assets/img/download3.jpeg";
import img5 from "../../assets/img/images.jpeg";
import video from "../../assets/img/video.mp4";
import video1 from "../../assets/img/video1.mp4";
import df from "../../assets/img/df.mp4";
import df1 from "../../assets/img/df1.mp4";
import "./style.css";
import HTMLFlipBook from "react-pageflip";
function HomePage() {
  const pages = [
    {
      title: "Explore Nature",
      quote:
        "Travel makes one modest. You see what a tiny place you occupy in the world.",
      image: img1,
    },
    {
      title: "Mountain Escape",
      quote: "The mountains are calling and I must go.",
      image: img2,
    },
    {
      title: "Adventure Time",
      quote: "Life is either a daring adventure or nothing at all.",
      image: img3,
    },
    {
      title: "Discover Beauty",
      quote: "Wherever you go becomes a part of you somehow.",
      image: img4,
    },
    {
      title: "Journey Begins",
      quote: "Adventure is worthwhile in itself.",
      image: img5,
    },
  ];
  const pages1 = [
    {
      title: "Chapter 1",
      content: "Welcome to the golden 3D Book!",
      image: img1,
    },
    { title: "Chapter 2", content: "This is page 2 with style.", image: img2 },
    {
      title: "Chapter 3",
      content: "The last page of our elegant book.",
      image: img3,
    },
  ];
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % pages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [pages.length]);

  return (
    <>
      {/* First Section */}

      {/* Second Section */}
      <Box
        id="slider-section"
        className="main-container"
        // style={{
        //   backgroundImage: `url(${pages[index].image})`,
        // }}
      >
        {/* <div className="glass-card">
          <h1 className="title1">Welcome, Developer 👨‍💻</h1>
          <p className="subtitle1">
            Building modern web experiences with React JS.
          </p>
          <button
            className="btn"
            onClick={() =>
              document
                .getElementById("slider-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore
          </button>
        </div> */}
        <Box key={index} className="overlay">
          <Box className="content">
            <Typography variant="h3" className="title">
              {pages[index].title}
            </Typography>

            <Typography variant="h6" className="quote">
              {pages[index].quote}
            </Typography>
          </Box>
        </Box>

        {/* <Box className="dots">
          {pages.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </Box> */}
        <video className="container-bg-video" autoPlay loop muted playsInline>
          <source src={df} type="video/mp4" />
        </video>

        {/* <Box key={index} className="overlay">
          <Box className="content">
            <Typography variant="h3" className="title">
              {pages[index].title}
            </Typography>

            <Typography variant="h6" className="quote">
              {pages[index].quote}
            </Typography>
          </Box>
        </Box>

        
        <Box className="dots">
          {pages.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </Box> */}
      </Box>
      <div className="book-container">
        <div>
          <HTMLFlipBook
            width={400}
            height={600}
            size="stretch"
            minWidth={300}
            maxWidth={600}
            minHeight={400}
            maxHeight={800}
            maxShadowOpacity={0.7}
            showCover={true}
            mobileScrollSupport={true}
            className="book"
          >
            {pages1.map((page, index) => (
              <div key={index} className="page black-gold-page">
                {page.image && (
                  <img src={page.image} alt={page.title} className="page-img" />
                )}
                <h2>{page.title}</h2>
                <p>{page.content}</p>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
        {/* Background Video */}
        {/* <video className="container-bg-video" autoPlay loop muted playsInline>
          <source src={df} type="video/mp4" />
        </video> */}

        {/* Left Video Column */}
        {/* <div className="video-column">
          <video className="column-video" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <video className="column-video" autoPlay loop muted playsInline>
            <source src={video1} type="video/mp4" />
          </video>
        </div> */}

        {/* Glass Card */}

        {/* Right Video Column */}
        {/* <div className="video-column">
          <video className="column-video" autoPlay loop muted playsInline>
            <source src={df} type="video/mp4" />
          </video>
          <video className="column-video" autoPlay loop muted playsInline>
            <source src={df1} type="video/mp4" />
          </video>
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
