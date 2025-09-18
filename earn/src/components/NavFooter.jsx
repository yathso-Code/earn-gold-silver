import React from "react";
import { NavLink } from "react-router-dom";
import "./NavFooter.css";

const NavFooter = () => {
  return (
    <div className="navFooter_main_box">
      <div className="box">
        <NavLink to="/" className="nav_item">
          <img src="/image/navfooter/home.png" alt="profile Logo"/>
          <p> Home </p>
        </NavLink>
        <NavLink to="/live" className="nav_item">
           <img src="/image/navfooter/live.png" alt="profile Logo"/>
          <p>Live</p>
        </NavLink>
        <NavLink to="/transaction" className="nav_item">
           <img src="/image/navfooter/transaction.png" alt="profile Logo"/>
          <p>Transaction</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavFooter;
