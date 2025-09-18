import React, { useState, useEffect } from "react";
import "./OtpVerify.css";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(30); // restart 30s countdown
    setCanResend(false);
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/"); // ✅ Navigate to login page
  };


  return (
    <div className="login_main_box">
      {/* Logo */}
      <div className="login_top_text">
        <div className="login_img">
          <img
            src="https://img.myjar.app/zZVyLSznIGHloWxMcgWOSkB7T8k-U6j02lUCjwEmZd8/rt:fit/w:200/h:0/q:65/f:avif/plain/https://myjar.app/_assets/shared/logos/jar_with_text_dark.avif"
            alt="Logo"
          />
        </div>
      </div>


      {/* Heading */}
      <div className="login_input_text">
        <h1>Enter OTP sent to your phone</h1>
      </div>

      {/* OTP input box */}
      <div className="login_input_box">
        <div className="input_box">
          <input type="text" maxLength="6" placeholder="Enter OTP" />
        </div>
      </div>

      {/* OTP button */}
      <div className="send_otp_btn">
        <button onClick={handleContinue}>Verify OTP</button>
      </div>

      {/* Timer + Resend OTP */}
      <div className="timer_box">
        {canResend ? (
          <p>
            Didn’t receive the OTP?{" "}
            <span onClick={handleResend}>Resend OTP</span>
          </p>
        ) : (
          <p>Resend OTP in <b>{timeLeft}s</b></p>
        )}
      </div>

    </div>
  );
};

export default OtpVerify;
