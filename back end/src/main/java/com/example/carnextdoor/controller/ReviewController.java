//package com.example.carnextdoor.controller;
//import com.example.carnextdoor.model.Entitiec.Car;
//import com.example.carnextdoor.model.Entitiec.Review;
//import com.example.carnextdoor.model.Entitiec.User;
//import com.example.carnextdoor.model.Service.ReviewService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//
//@RestController
//@RequestMapping(path = "/review")
//public class ReviewController {
//    private ReviewService reviewService;
//
//    @Autowired
//    public ReviewController(ReviewService reviewService) {
//        this.reviewService = reviewService;
//    }
//
//    @GetMapping
//    public List<Review> getReviews() {
//        return reviewService.getReviews();
//    }
//
//
//    @GetMapping(path = "{reviewId}")
//    public Optional<Review> getReview(@PathVariable(name = "reviewId") Integer reviewId) {
//        return reviewService.getReview(reviewId);
//    }
//    @PostMapping("add")
//    public void registerNewReview(@RequestBody Review review) {
//        reviewService.addNewReview(review);
//    }
//}



