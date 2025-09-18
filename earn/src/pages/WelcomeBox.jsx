import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./WelcomeBox.css";

export const WelcomeBox = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login"); // ✅ Navigate to login page
  };

  return (
    <div className="welcome_container">
      <div className="welcome_box">
        {/* Top Icon */}
        <div className="icon_area">
          <span role="img" aria-label="safe">🛡️</span>
        </div>

        {/* Title */}
        <h2 className="title">Say Hello to Savings</h2>
        <p className="subtitle">100% safe and secure</p>

        <hr className="divider" />

        {/* Bottom Text */}
        <div className="bottom_area">
          <h3 className="bottom_title">We Missed You</h3>
          <p className="bottom_desc">
            Let’s finish your sign up and help you save money!
          </p>
        </div>

        {/* Button */}
        <button className="cta_btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};
