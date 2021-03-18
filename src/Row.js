import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
function Row({ title, fetchUrl, isLarge = false }) {
  const baseurl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVar: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <div className="row-title">
        <h2>{title}</h2>
      </div>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLarge && "row_poster_large"}`}
                src={`${baseurl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
