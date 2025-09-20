package dev.zelabbas.movies.controller;

import dev.zelabbas.movies.Review;
import dev.zelabbas.movies.repository.ReviewRepository;
import dev.zelabbas.movies.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;


    @PostMapping
    public ResponseEntity<Review> CreateReview(@RequestBody Map<String, String> body) {
        return new ResponseEntity<>(reviewService.createReview(body.get("reviewBody"), body.get("imdbId")), HttpStatus.CREATED);
    }

}
