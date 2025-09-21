import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MoviesList.css';

function MoviesList({ movies }) {
  const navigate = useNavigate();
  return (
    <div className="movies-list">
      {movies.map(movie => (
        <div className="movie-card" key={movie.imdbId} onClick={() => navigate(`/movies/${movie.imdbId}`)} style={{cursor:'pointer'}}>
          <img className="movie-poster" src={movie.poster} alt={movie.title} />
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
            <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="trailer-link">Watch Trailer</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
