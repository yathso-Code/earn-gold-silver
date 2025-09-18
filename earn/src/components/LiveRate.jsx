import React from 'react'
import "./LiveRate.css";

export const LiveRate = () => {
  return (
    <div className="live_rate_section">
      <h1 className="title">Live Gold & Silver Rates</h1>

      <div className="live_cards">
        {/* Silver */}
        <div className="card silver">
        <div  className='silver_img_name'>
          <img src="/image/home/silver-badge.png" alt="profile Logo" />
           <h2>Silver</h2>
        </div>
          <p className="price">₹75,500 / kg</p>
          <p className="change up">+1.25%</p>
        </div>

        {/* Gold */}
        <div className="card gold">
        <div className='gold_img_name'>
          <img src="/image/home/coin.png" alt="profile Logo"/>
          <h2>Gold</h2>
          </div>
          <p className="price">₹62,300 / 10g</p>
          <p className="change down">-0.85%</p>
        </div>
      </div>
    </div>
  )
}
