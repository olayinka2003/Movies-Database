import React, { useEffect, useState } from "react";

function MovieList() {
  const apiKey = "api_key=c7cba54e8036127f06f9792f9781dbad";
  const baseUrl = "https://api.themoviedb.org/3";
  const apiURl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiURl)
      .then((reponse) => reponse.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching blog:", error));
  }, []);

  console.log(movies)

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
          <p>Title: {movie.title}</p>
          <p>Overview: {movie.overview}</p>
          <p>Vote Average: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
