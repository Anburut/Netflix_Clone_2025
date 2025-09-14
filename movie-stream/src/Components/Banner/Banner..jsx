import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'; // your axios instance
import requests from '../../utils/requests';
import './banner.css'

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching Netflix Originals...");
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log("TMDB Response:", request.data);

        const results = request.data.results;
        if (!results || results.length === 0) {
          console.warn("No movies found!");
          return;
        }

        // Pick a random movie
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.error("Error fetching banner movie:", error);
      }
    };

    fetchData();
  }, []);

  // Helper to truncate text
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.original_name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
