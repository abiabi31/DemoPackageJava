import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Services from "../components/Services";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <main className="home__main">
        <div className="home__hero-glow" />
        <Hero />
        <About />
        <Features />
        <Services />
        <Blogs />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
