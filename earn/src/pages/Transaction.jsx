import React from "react";
import { NavBar } from "../components/NavBar";
import NavFooter from "../components/NavFooter";
import "./Transaction.css"; // Import CSS file

export const Transaction = () => {
  const transactions = [
    {
      id: 1,
      type: "Silver",
      icon: "⚡",
      status: "active",
      time: "10:20 AM",
      date: "Sep 14",
      amount: "₹110.50",
      weight: "0.0005g",
    },
    {
      id: 2,
      type: "Gold",
      icon: "📘",
      status: "active",
      time: "10:30 AM",
      date: "Sep 14",
      amount: "₹150.60",
      weight: "0.0009g",
    },
    {
      id: 3,
      type: "Gold",
      icon: "📘",
      status: "active",
      time: "10:30 AM",
      date: "Sep 14",
      amount: "₹150.60",
      weight: "0.0009g",
    },
    {
      id: 4,
      type: "Gold",
      icon: "📘",
      status: "active",
      time: "10:30 AM",
      date: "Sep 14",
      amount: "₹150.60",
      weight: "0.0009g",
    },
    {
      id: 5,
      type: "Gold",
      icon: "📘",
      status: "active",
      time: "10:30 AM",
      date: "Sep 14",
      amount: "₹150.60",
      weight: "0.0009g",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="transaction_main_box">
        {/* Top Tabs */}
        <div className="transaction_tabs">
          <button>Statement</button>
          <button>Status ▾</button>
          <button>Filters</button>
        </div>

        {/* Section */}
        <h3 className="section_title">Yesterday</h3>

        {/* List */}
        <div className="transaction_list">
          {transactions.map((item) => (
            <div key={item.id} className="transaction_card">
              <div className="left">
                <span className="icon">{item.icon}</span>
                <div className="details">
                  <h4>{item.type}</h4>
                  <p>
                    <span className="status_dot"></span>
                    {item.time} · {item.date}
                  </p>
                </div>
              </div>
              <div className="right">
                <h4>{item.amount}</h4>
                <p>{item.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavFooter />
    </>
  );
};
