// src/utils/api.js
import axios from "axios";

// Set base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_API_URL;

// Create an Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
});

export default api;
