import React from "react";

function MovieDetail({ movie, imgUrl, onFavoriteClick, favorite }) {
    return (
        <div key={movie.id} className="movie">
            <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
            <p>Title: {movie.title}</p>
            <p>Overview: {movie.overview}</p>
            <p>Vote Average: {movie.vote_average}</p>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <span className="material-symbols-outlined" onClick={() => onFavoriteClick(movie)}>
                {favorite.some(fav => fav.id === movie.id) ? 'favorite' : 'favorite_border'}
            </span>
        </div>
    );
}

export default MovieDetail;
