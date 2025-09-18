import React from 'react'
import "./Banner.css";

const Banner = () => {
  return (
    <div className='parent_box'>
    <div className="home_banner">
          <div className='image'>
             <img src='/image/home/gold-bars.png' title='image' />
          </div>
         <div className='btn'>
            <button className='silver_btn'>  
            <img src='/image/home/silver.png' title='image' /> <span>BUY SILVER</span>  
            </button>
            <button className='gold_btn'>
            <img src='/image/home/gold.png' title='image' /> <span>BUY GOLD</span>  
            </button>
         </div>
      </div>
      </div>
  )
}

export default Banner
