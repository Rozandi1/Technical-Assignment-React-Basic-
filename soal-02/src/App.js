import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  async function fetchMovieList() {
    fetch("https://api.jikan.moe/v3/top/anime")
      .then((response) => response.json())
      .then((movie) => {
        setMovieList(movie.top);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setFetchError(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovieList();
  }, [movieList]);

  if (isLoading) {
    return <h1>Tunggu dulu ya</h1>;
  } else {
    return <>{fetchError ? <h1>Maaf Fetch Gagal</h1> : <MovieCard key={movieList.mal_id} movieList={movieList} />}</>;
  }
}

//   return (
//     <>
//       <div className="container my-5">
//         <h1 className="text-center">Anime List</h1>
//         <div id="daftar-movie" className="container row my-5">
//           <MovieCard key={movieList.mal_id} movieList={movieList} />
//         </div>
//       </div>
//     </>
//   );
// }

export default App;
