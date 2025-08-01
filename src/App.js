import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; // agar bana ho
import Navbar from "./components/Navbar"; // agar bana ho
import Home from "./pages/Home"; // optional
import FormRequest from "./pages/FormRequest";
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

                                

function App() {
  return (
    <Router>
      <Navbar /> {/* Common navbar across pages */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin dashboard route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* User dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Baaki routes yahan add karo */}
        <Route path="/form-request" element={<FormRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
