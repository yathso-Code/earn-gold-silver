import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/wallet"); // ✅ Navigate to login page
  };


  return (
    <>
      {/* Navbar */}
      <div className="navbar_main_box">
        <div className="box">
          <div className="img_box" onClick={() => setIsOpen(true)} >
            <img src="/image/navbar/profile.png" alt="profile Logo"/>
          </div>
          <div className="wallet_box" onClick={handleContinue} >
            <img src="/image/navbar/wallet.png" alt="wallet Logo"/>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar_top_box">
         <div className="img_box">
           <img src="/image/navbar/profile.png" alt="Navbar Logo"/>
         </div>
         <button className="close_btn" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        </div>

        <div className="get_help">
        <h1>Get Help</h1>
        <ul>
          <li>Jar Support</li>
          <li>Privacy Policy</li>
          <li>Term & Condition</li>
        </ul>
        </div>

        <div className="setting">
        <h1>Setting</h1>
        <ul>
          <li>Add A Nominee</li>
          <li>Promo Code</li>
          <li>Notification Setting</li>
          <li>Logout</li>
        </ul>
        </div>
      </div>

      {/* Overlay (when sidebar open) */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};
