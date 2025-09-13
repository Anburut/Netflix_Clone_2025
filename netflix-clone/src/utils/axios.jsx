// axios.jsx
import axios from "axios";

// Define baseURL for all TMDB requests
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // TMDB base URL
});

export default instance;
