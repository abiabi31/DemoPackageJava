import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import img1 from "../../assets/img/images.jpeg";
import img2 from "../../assets/img/4.jpeg";
import img4 from "../../assets/img/5.jpeg";
import img5 from "../../assets/img/6.jpeg";
import img6 from "../../assets/img/7.jpeg";
import df from "../../assets/img/df.mp4";
import "./style.css";
import HTMLFlipBook from "react-pageflip";
import flySound from "../../assets/img/fly.mp3";

function Blog() {
  const bookRef = useRef(null);
  const audioRef = useRef(null);

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

  // const handlePlaneClick = () => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   audio.pause();
  //   audio.currentTime = 0;
  //   audio.volume = 0.6;
  //   audio.play().catch(() => {});
  // };

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   audio.volume = 0.6;
  //   audio.play().catch(() => {
  //     // If blocked, wait for first user click
  //     const unlockAudio = () => {
  //       playAudio();
  //       window.removeEventListener("click", unlockAudio);
  //     };
  //     window.addEventListener("click", unlockAudio);
  //   });
  // }, []);

  // 🔥 Plane Click Play
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
    <Box className="book-container">
      {/* Background Video */}
      <video className="container-bg-video" autoPlay loop muted playsInline>
        <source src={df} type="video/mp4" />
      </video>

      {/* Glass Card */}
      <Box className="glass-card">
        <h1 className="title1">Welcome, Explorer ✈️🌍</h1>
        <p className="subtitle1">
          Discover breathtaking destinations and create unforgettable memories.
        </p>
      </Box>
      {/* Flip Book */}
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
      <div className="plane" onClick={handlePlaneClick}>
        ✈️
      </div>
      <audio ref={audioRef} preload="auto">
        <source src={flySound} type="audio/mpeg" />
      </audio>
    </Box>
  );
}

export default Blog;
