import React, { useEffect, useState } from "react";
import api from "../axiosConfig";
import axios from "axios";

export default function AdminDashboard() {
  const [services, setServices] = useState([]);

  // Services fetch function
  const fetchServices = async () => {
    try {
      const res = await api.get("/services"); // GET request to backend
      setServices(res.data);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  // Fetch services when component mounts
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Available Services</h2>
      <ul>
        {services.length > 0 ? (
          services.map((service) => (
            <li key={service._id}>
              {service.name} - ₹{service.price}
            </li>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </ul>
    </div>
  );
}
