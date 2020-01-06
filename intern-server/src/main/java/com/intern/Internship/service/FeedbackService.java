package com.intern.Internship.service;

import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.dto.FeedbackDTO;

import java.util.List;
import java.util.Set;

public interface FeedbackService {
    FeedbackDTO save(FeedbackDTO feedbackDTO);

    Feedback findById(String feedbackId);

    void delete(Feedback feedback);

    Set<FeedbackDTO> getFeedbacks(String internshipId);

    FeedbackDTO getFeedback(String id);
}
