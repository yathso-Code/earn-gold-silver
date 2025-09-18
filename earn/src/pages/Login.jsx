import React from "react";
import "./Login.css"; // import CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/otpVerify"); // ✅ Navigate to login page
  };

  return (
    <div className="login_main_box">
      <div className="login_top_text">
        <div className="login_img">
         <img src="https://img.myjar.app/zZVyLSznIGHloWxMcgWOSkB7T8k-U6j02lUCjwEmZd8/rt:fit/w:200/h:0/q:65/f:avif/plain/https://myjar.app/_assets/shared/logos/jar_with_text_dark.avif"/>
        </div>
      </div>
      <div className="login_banner_image">
         <img src="https://plus.unsplash.com/premium_photo-1677146774696-16079714b630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGdvbGQlMjBjb2luc3xlbnwwfHwwfHx8MA%3D%3D"/>
      </div>
      <div className="login_input_text">
        <h1>Start by entering your phone number</h1>
      </div>
      <div className="login_input_box">
        <div className="input_box">
          <h1>+91</h1>
          <input type="text" />
        </div>
      </div>
       
      <div className="send_otp_btn">
      <button onClick={handleContinue}>Send OTP</button>
      </div>

      <div className="bottom_text">
        <p>I have read the <span> T&C </span> and <span>Privacy Policy</span> </p>
      </div>
    </div>
  )
}

export default Login
