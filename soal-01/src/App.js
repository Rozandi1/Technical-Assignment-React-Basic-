import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import animeList from "./dummy-data";

function App() {
  const [movieCard, setMovieCard] = useState([]);

  useEffect(() => {
    setMovieCard(animeList);
    console.log(movieCard);
  }, [movieCard]);

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div id="daftar-movie" className="container row my-5">
          <MovieCard key={movieCard.mal_id} movieCard={movieCard} />
        </div>
      </div>
    </>
  );
}

export default App;
