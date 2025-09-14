import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios"; 
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close if already open
      return;
    }

    // Possible title variations
    const possibleTitles = [
      movie?.title,
      movie?.name,
      movie?.original_name,
      movie?.title + " official trailer",
      movie?.name + " official trailer",
      movie?.original_name + " official trailer",
    ].filter(Boolean); // remove undefined/null

    for (const title of possibleTitles) {
      try {
        const url = await movieTrailer(title);
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          return; // stop after finding first match
        }
      } catch (error) {
        // Try next variation
      }
    }

    console.log("No trailer found for:", movie);
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
