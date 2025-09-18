import React, { useState, useEffect } from "react";
import "./Buy.css";
import { NavBar } from "../components/NavBar";
import NavFooter from "../components/NavFooter";

const Buy = () => {
  const [amount, setAmount] = useState(10);
  const [coupon, setCoupon] = useState("GETGOLD50");
  const [goldRate, setGoldRate] = useState(7250);
  const [upiApp, setUpiApp] = useState("PhonePe");

  const quickAmounts = [10, 20, 25, 50, 100];

  // Simulate live gold rate updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGoldRate((prev) => {
        const change = (Math.random() * 10 - 5).toFixed(2);
        return Math.max(7200, (prev + Number(change)).toFixed(2));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="savegold_container">
          {/* Live Gold Rate */}
          <div className="live_rate_box">
            <p>🔥 Live Gold Rate</p>
            <span>₹{goldRate} / gram</span>
          </div>

          {/* Input Box */}
          <div className="input_section">
            <div className="input_box">
              <span className="currency">₹</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="grams">0.0006 g</span>
            </div>

            {/* Quick Buttons */}
            <div className="quick_buttons">
              {quickAmounts.map((val, i) => (
                <button key={i} onClick={() => setAmount(val)}>
                  ₹{val}
                </button>
              ))}
            </div>
          </div>

          {/* Coupon Section */}
          {coupon && (
            <div className="coupon_box">
              <div className="coupon_text">
                🎁 {coupon} applied! You get 0.5 g extra gold.
              </div>
              <button className="remove_btn" onClick={() => setCoupon(null)}>
                REMOVE
              </button>
            </div>
          )}

          {/* Payment Method */}
          <div className="payment_box">
            <div className="pay_method">
              <span>💳 Select UPI App</span>
              <select
                className="upi_select"
                value={upiApp}
                onChange={(e) => setUpiApp(e.target.value)}
              >
                <option value="PhonePe">📲 PhonePe</option>
                <option value="GooglePay">💳 Google Pay</option>
                <option value="Paytm">💰 Paytm</option>
                <option value="BHIM">🏦 BHIM UPI</option>
              </select>
            </div>

            <button className="pay_btn">
              Pay Now 
            </button>
          </div>
        </div>
      </div>
      <NavFooter />
    </>
  );
};

export default Buy;
