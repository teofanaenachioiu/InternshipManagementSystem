package com.intern.Internship.service.implementation;

import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.dto.FeedbackDTO;
import com.intern.Internship.repository.FeedbackRepository;
import com.intern.Internship.repository.InternshipRepository;
import com.intern.Internship.service.FeedbackService;
import com.intern.Internship.utils.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;
    @Autowired
    private InternshipRepository internshipRepository;

    @Override
    public FeedbackDTO save(FeedbackDTO feedbackDTO) {
        if (feedbackDTO == null)
            throw new IllegalArgumentException();
        Internship internship = internshipRepository.getOne(feedbackDTO.getInternshipId());
        Feedback feedback = Converters.feedbackDTOtoFeedback(feedbackDTO);
        feedback.setInternship(internship);
        Feedback feedback1 = feedbackRepository.save(feedback);
        feedbackDTO.setID(feedback1.getID());
        return feedbackDTO;
    }

    @Override
    public Feedback findById(String feedbackId) {
        return feedbackRepository.getOne(feedbackId);
    }

    @Override
    public void delete(Feedback feedback) {
        feedbackRepository.delete(feedback);
    }

    @Override
    public Set<FeedbackDTO> getFeedbacks(String internshipId) {
        Set<Feedback> feedbacks =feedbackRepository.getFeedbackByInternship(internshipId);
        return Converters.feedbacktoFeedbackDTO(feedbacks);
    }

    @Override
    public FeedbackDTO getFeedback(String id) {
        return new FeedbackDTO(feedbackRepository.getOne(id));
    }
}
