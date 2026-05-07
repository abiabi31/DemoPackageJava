import { useEffect, useState } from "react";
import "./LoadingScreen.css";
import logo from "../../assets/img/newlogo.png";

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      {/* Background */}
      <div className="bg-gradient"></div>

      {/* Glow */}
      <div className="glow-effect"></div>

      {/* Logo */}
      <img src={logo} className="center-logo" alt="logo" />

      {/* Loader */}
      <div className="loading-container">
        <div className="globe-wrapper">
          <div className="globe">
            <div className="globe-segment"></div>
            <div className="globe-segment"></div>
            <div className="globe-segment"></div>

            <div className="ring ring-x"></div>
            <div className="ring ring-y"></div>
            <div className="ring ring-z"></div>
          </div>
        </div>

        <div className="loading-text">
          <p>Loading your travel experience</p>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
