import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Attendance from "./pages/Attendance";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Subject from "./pages/Subject";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { useState } from "react";

export default function App() {
  const user = useSelector((state)=>state.auth.user)
  const navigate = useNavigate()
  // useEffect(() => {
  //   !user && navigate("/login")
  // }, [user])
  
  return (
    <div className="flex h-screen w-full">
      
      {user && <Sidebar /> }
      <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="attendance" element={ <Attendance/>} />
          <Route path="subjects" element={<Subject/>} />
          <Route path="profile" element={ <Profile />} />
      </Routes>
      <ToastContainer
        theme= "dark"
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}