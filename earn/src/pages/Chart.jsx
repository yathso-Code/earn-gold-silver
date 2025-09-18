import React from "react";
import "./Chart.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from "react-router-dom";

const Chart = () => {
  const data = [
    { name: "Mon", uv: 400 },
    { name: "Tue", uv: 300 },
    { name: "Wed", uv: 500 },
    { name: "Thu", uv: 200 },
    { name: "Fri", uv: 450 },
    { name: "Sat", uv: 600 },
    { name: "Sun", uv: 700 },
  ];

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/buy"); 
  };

  return (
    <div className="chart_main_box">
      {/* Header Section */}
      <div className="text_in_chart">
        <p className="label">🔴 Live Gold Price</p>
        <p className="price">$11,22,34 / g</p>
        <p className="timeframe">1w Chart</p>
      </div>

      {/* Chart Section */}
      <div className="chart_box">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 0, right: 2, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="#aaa" strokeDasharray="1 1" />
            <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend align="right" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Button */}
      <div className="btn_box">
        <button onClick={handleContinue}>Buy Gold</button>
      </div>
    </div>
  );
};

export default Chart;
