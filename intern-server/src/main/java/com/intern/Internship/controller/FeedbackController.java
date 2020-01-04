package com.intern.Internship.controller;

import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.dto.FeedbackDTO;
import com.intern.Internship.service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/feedback")
@CrossOrigin(origins = "http://localhost:4200")
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
}
