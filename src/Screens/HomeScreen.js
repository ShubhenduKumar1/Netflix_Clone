import React from "react";
import NavBar from "../Navbar";
import Banner from "../Banner";
import request from "../Request";
import Row from "../Row";
function HomeScreen() {
  return (
    <>
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge
      />
      <Row title="TRENDING" fetchUrl={request.fetchTrending} />
      <Row tile="TOP RATED" fetchUrl={request.fetchTopRated} />

      <Row title="ACTION" fetchUrl={request.fetchActionMOvies} />
      <Row title="COMEDY" fetchUrl={request.fetchComedyMovies} />
      <Row title="ROMANCE" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </>
  );
}

export default HomeScreen;
