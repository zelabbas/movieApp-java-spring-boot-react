package dev.zelabbas.movies.controller;


import dev.zelabbas.movies.Movie;
import dev.zelabbas.movies.repository.MovieRepository;
import dev.zelabbas.movies.service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping()
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.allMovies();
        return new ResponseEntity<>( movies , HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMovieById(@PathVariable String id) {
        Movie movie = movieService.getMovieByImdbId(id);
        if (movie == null) {
            return new ResponseEntity<>("movie not found",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }
}
