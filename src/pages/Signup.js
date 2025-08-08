import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axiosConfig";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/signup", formData);
      if (res.data.success) {
        toast.success(res.data.message || "Signup successful!");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        toast.error("Server not responding. Please try later.");
      } else {
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
