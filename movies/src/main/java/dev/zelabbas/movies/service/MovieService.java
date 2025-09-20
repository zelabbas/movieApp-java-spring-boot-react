package dev.zelabbas.movies.service;

import dev.zelabbas.movies.Movie;
import dev.zelabbas.movies.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies() {
         return  movieRepository.findAll();
    }

    public Movie getMovieById(ObjectId movieId) {
        return movieRepository.findById(movieId).orElse(null);
    }

    public Movie getMovieByImdbId(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId).orElse(null);
    }
}
