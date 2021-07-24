import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "deployment link here"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseURL,
});

export default api;
