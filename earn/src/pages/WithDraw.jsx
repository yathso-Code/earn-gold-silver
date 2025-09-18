import React, { useState, useEffect } from "react";
import "./Withdraw.css";
import { NavBar } from "../components/NavBar";
import NavFooter from "../components/NavFooter";

export default function Withdraw() {
  const [amount, setAmount] = useState(10);
  const [goldPrice, setGoldPrice] = useState(56789); // initial price in ₹ per 10g

  const availableBalance = 271.4;
  const lockedAmount = 10;

  // Simulate live gold price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGoldPrice((prev) => {
        let fluctuation = (Math.random() * 20 - 10).toFixed(2); // -10 to +10
        return Math.max(50000, (parseFloat(prev) + parseFloat(fluctuation)).toFixed(2));
      });
    }, 3000); // update every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <div className="withdraw-container">
        <div className="withdraw-card">
          {/* Header */}
          <h2 className="card-title">Enter Amount</h2>

          {/* Amount Input */}
          <div className="amount-box">
            <span>₹</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Balance Info */}
          <div className="balance-card">
            <p className="small-text">Current value of savings</p>
            <p className="big-text">₹{availableBalance}</p>
            <p className="tiny-text">(0.00023 B Gold)</p>

            <div className="balance-details">
              <p>
                Available to withdraw: <span>₹{availableBalance}</span>
              </p>
              <p>
                Locked Amount: <span>₹{lockedAmount}</span>
              </p>
              <p className="tiny-text">
                No amount is locked for security reasons; savings can’t be
                withdrawn for 2 hrs.
              </p>
            </div>
          </div>

          {/* NEW: Live Gold Price Card */}
          <div className="gold-price-card">
            <h3>🔥 Live Gold Price</h3>
            <p className="gold-price">₹{goldPrice} / 10g</p>
            <p className="tiny-text">Updated every 3 seconds</p>
          </div>

          {/* Proceed Button */}
          <button className="proceed-btn">Proceed</button>

          {/* Footer Note */}
          <p className="footer-note">
            You can withdraw once in 3.5 hrs for security reasons.
          </p>
        </div>
      </div>
      <NavFooter />
    </>
  );
}
