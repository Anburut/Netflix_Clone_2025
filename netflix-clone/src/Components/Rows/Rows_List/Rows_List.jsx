import React, { useState } from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const Rows_List = () => {
  const [currentTrailer, setCurrentTrailer] = useState("");

  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        currentTrailer={currentTrailer}
        setCurrentTrailer={setCurrentTrailer}
      />
    </div>
  );
};

export default Rows_List;
