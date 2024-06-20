import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function MovieSearch() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [movieDetail, setMovieDetail] = useState(null);
    const [favorite, setFavorite] = useState([]);

    const imgUrl = "https://image.tmdb.org/t/p/w500";
    const apiKey = "c7cba54e8036127f06f9792f9781dbad";
    const baseUrl = "https://api.themoviedb.org/3";
    const apiUrl = `${baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    useEffect(() => {
        if (searchQuery) {
            fetch(searchUrl + searchQuery)
                .then((response) => response.json())
                .then((data) => setMovies(data.results))
                .catch((error) => console.error("Error searching movies:", error));
        }
    }, [searchQuery]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        if (storedFavorites) {
            setFavorite(storedFavorites);
        }
    }, []);

    useEffect(() => {
        if (favorite.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorite));
        } else {
            localStorage.removeItem('favorites');
        }
    }, [favorite]);

    const handleMovieClick = (movie) => {
        setMovieDetail(movie);
    };

    const handleBackToList = () => {
        setMovieDetail(null);
    };

    const handleFavoriteClick = (movie) => {
        if (!favorite.some(fav => fav.id === movie.id)) {
            setFavorite([...favorite, movie]);
        } else {
            setFavorite(favorite.filter(fav => fav.id !== movie.id));
        }
    };

    return (
        <div>
            {!movieDetail ? (
                <div>
                    <SearchForm search={setSearchQuery} />
                    <br />
                    <MovieList movies={movies} onMovieClick={handleMovieClick} favorite={favorite} onFavoriteClick={handleFavoriteClick} />
                </div>
            ) : (
                <>
                    <MovieDetail movie={movieDetail} imgUrl={imgUrl} onFavoriteClick={handleFavoriteClick} favorite={favorite} />
                    <button onClick={handleBackToList}>Back To List</button>
                </>
            )}
        </div>
    );
}

export default MovieSearch;
