import React from 'react';
import './MovieDetail.css';

function MovieDetail({ movie }) {
  if (!movie) return null;

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-main">
        <img className="detail-poster-large" src={movie.poster} alt={movie.title} />
        <div className="movie-detail-info">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="trailer-link">Watch Trailer</a>
        </div>
      </div>
      <div className="backdrops-gallery">
        <h3>Backdrops</h3>
        <div className="backdrops-list">
          {movie.backdrops && movie.backdrops.map((url, idx) => (
            <img key={idx} src={url} alt="backdrop" className="backdrop-img-large" />
          ))}
        </div>
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        {movie.reviewIds && movie.reviewIds.length > 0 ? (
          movie.reviewIds.map((review, idx) => (
            <div key={idx} className="review">
              <p>{review.body}</p>
              <span className="review-date">{review.id.date}</span>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
