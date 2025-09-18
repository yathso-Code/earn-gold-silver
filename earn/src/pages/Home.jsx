import React from 'react'
import Blog from "../components/Blog";
import { FAQ } from "../components/FAQ";
import { LiveRate } from "../components/LiveRate";
import { NavBar } from "../components/NavBar"
import NavFooter from "../components/NavFooter"
import WhyEarn from "../components/WhyEarn";
import "./Home.css"; // import CSS file
import Banner from "../components/Banner";



const Home = () => {
  return (
    <>
     <NavBar/>
     <div className="home_main_box">
      
     <div className="user_name">
       <h1>Hello, <p> Yatharth shukla</p> </h1>
     </div>

     <Banner/>
     <LiveRate/>
     <Blog/>
     <WhyEarn/>
      <FAQ/>
     </div>
     <NavFooter/>
    </>
  )
}

export default Home
