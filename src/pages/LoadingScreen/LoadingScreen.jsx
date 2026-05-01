import { useEffect, useState } from "react";
import "./LoadingScreen.css";

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      {/* Animated background */}
      <div className="bg-gradient"></div>

      {/* Glowing effect */}
      <div className="glow-effect"></div>

      {/* Loading container */}
      <div className="loading-container">
        {/* 3D Rotating Globe */}
        <div className="globe-wrapper">
          <div className="globe">
            {/* Globe segments for 3D effect */}
            <div className="globe-segment"></div>
            <div className="globe-segment"></div>
            <div className="globe-segment"></div>

            {/* Rotating rings */}
            <div className="ring ring-x"></div>
            <div className="ring ring-y"></div>
            <div className="ring ring-z"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="loading-text">
          <p>Loading your travel experience</p>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
