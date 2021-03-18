import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import Request from "./Request";

function Banner() {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Request.fetchNetflixOriginals);
      // console.log(request.data);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="Banner-div">
      <div
        className="Banner_background"
        style={{
          background: `url(${baseImageUrl}${movie.backdrop_path})no-repeat center center/cover`,
        }}
      >
        <div className="Banner_content">
          <div className="Banner-title">
            <h1>{movie.name || movie.title}</h1>
          </div>
          <div className="Buttons">
            <button className="play_button">Play</button>
            <button className="info_button">More Info</button>
          </div>
          <p>{truncate(movie?.overview, 150)}</p>
        </div>
        <div className="fade-bottom" />
      </div>
    </div>
  );
}

export default Banner;
