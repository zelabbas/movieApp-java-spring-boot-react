import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/api/v1/movies")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="simple-header">
          <h1>Movie App</h1>
        </header>
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function MovieDetailPage() {
  const { id } = require('react-router-dom').useParams();
  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/v1/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{textAlign:'center',color:'#fff'}}>Loading...</div>;
  if (!movie) return <div style={{textAlign:'center',color:'#fff'}}>Movie not found.</div>;
  return <MovieDetail movie={movie} />;
}

export default App;
