import axios from "axios";

const api = axios.create({
  baseURL: "https://e-cyber-cafe-backend.onrender.com/", // <- yahan apna backend ka Render URL daalo
});

export default api;
