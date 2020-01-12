package com.intern.Internship.controller;

import java.util.HashSet;
import java.util.Set;

import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.dto.FeedbackDTO;
import com.intern.Internship.service.FeedbackService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/feedback")
public class FeedbackController {
    @Autowired
    FeedbackService feedbackService;

    @PostMapping()
    public ResponseEntity<FeedbackDTO> save(@RequestBody FeedbackDTO feedbackDTO) {
        try {
            FeedbackDTO result = feedbackService.save(feedbackDTO);
            return ResponseEntity.ok().body(result);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new FeedbackDTO());
        }
    }

    @DeleteMapping()
    public ResponseEntity<FeedbackDTO> delete(@RequestParam("id") String feedbackId) {
        Feedback feedback = feedbackService.findById(feedbackId);
        if (feedback == null) {
            return ResponseEntity.badRequest().body(new FeedbackDTO());
        }
        feedbackService.delete(feedback);

        return ResponseEntity.ok().body(new FeedbackDTO(feedback));
    }

    @GetMapping("/internship")
    public ResponseEntity<Set<FeedbackDTO>> getFeedbacks(@RequestParam("id") String internshipId) {

        try {
            Set<FeedbackDTO> feedbacks = feedbackService.getFeedbacks(internshipId);
            return ResponseEntity.ok().body(feedbacks);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new HashSet<>());
        }
    }

    @GetMapping
    public ResponseEntity<FeedbackDTO> getFeedback(@RequestParam("id") String id) {

        try {
            FeedbackDTO feedbacks = feedbackService.getFeedback(id);
            return ResponseEntity.ok().body(feedbacks);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new FeedbackDTO());
        }
    }
}
