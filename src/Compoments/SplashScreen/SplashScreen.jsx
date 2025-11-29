import React from "react";
import "./SplashScreen.css";
import splashLogo from "..//..//assets/Splashs.png"; // same folder ke andar image

function SplashScreen() {
  return (
    <div className="splash-container">
      <img src={splashLogo} alt="Ocassio" className="splash-logo" />
      <div className="loader"></div>
    </div>
  );
}

export default SplashScreen;
