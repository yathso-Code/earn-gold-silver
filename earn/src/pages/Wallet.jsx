import React from "react";
import "./Wallet.css";
import NavFooter from "../components/NavFooter";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FAQ } from "../components/FAQ";

export const Wallet = () => {

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/buy"); 
  };

  const handleContinueWallet = () => {
    navigate("/withdraw"); 
  };

  return (
    <>
      <NavBar />
      <div className="wallet_container">
        <h2 className="wallet_title">My Wallet</h2>

        {/* Gold Row */}
        <div className="wallet_row">
          <h3 className="row_title">Gold Balance</h3>
          <div className="wallet_box1 gold_box">
            <p className="wallet_value">₹20.5</p>
            <span className="wallet_coin">0.822 g</span>

            <div className="btn_group">
              <button className="wallet_btn withdraw" onClick={handleContinueWallet}>Withdraw</button>
              <button className="wallet_btn buy" onClick={handleContinue} >Buy Gold</button>
            </div>
          </div>
        </div>

        {/* Silver Row */}
        <div className="wallet_row">
          <h3 className="row_title">Silver Balance</h3>
          <div className="wallet_box1 silver_box">
            <p className="wallet_value">₹10.2</p>
            <span className="wallet_coin">15.38 g</span>

            <div className="btn_group">
              <button className="wallet_btn withdraw" onClick={handleContinueWallet}>Withdraw</button>
              <button className="wallet_btn buy" onClick={handleContinue}>Buy Silver</button>
            </div>
          </div>
        </div>
      </div>
        <FAQ/>
      <NavFooter />
    </>
  );
};
