import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import OtpVerify from "../pages/OtpVerify";
import { Live } from "../pages/Live";
import { Transaction } from "../pages/Transaction";
import { Wallet } from "../pages/Wallet";
import { WelcomeBox } from "../pages/WelcomeBox";
import Buy from "../pages/Buy";
import Withdraw from "../pages/WithDraw";


export default function AppRouter() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/otpVerify" element={<OtpVerify/>} />
        <Route path="/live" element={<Live />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/welcome" element={<WelcomeBox />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}
