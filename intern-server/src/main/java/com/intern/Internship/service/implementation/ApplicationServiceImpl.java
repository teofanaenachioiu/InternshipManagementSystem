package com.intern.Internship.service.implementation;

import com.intern.Internship.model.Application;
import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.dto.ApplicationDTO;
import com.intern.Internship.repository.ApplicationRepository;
import com.intern.Internship.repository.FeedbackRepository;
import com.intern.Internship.service.ApplicationService;
import com.intern.Internship.utils.Converters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    ApplicationRepository applicationRepository;

    @Autowired
    FeedbackRepository feedbackRepository;

    @Override
    public Application save(Application application) {
        if (application == null)
            throw new IllegalArgumentException();
        return applicationRepository.save(application);
    }

    @Override
    public List<ApplicationDTO> getApplicationsByUsername(String username) {
        List<ApplicationDTO> applicationDTOS= Converters.applicationToApplicationDTO(applicationRepository.findAllByUsername(username));
        for(ApplicationDTO applicationDTO:applicationDTOS){
            Set<Feedback> feedbackSet= feedbackRepository.getFeedbackByInternship(applicationDTO.getIdInternship());
            applicationDTO.setFeedbacks(Converters.feedbacktoFeedbackDTO(feedbackSet));
        }
        return applicationDTOS;
    }

    @Override
    public Application findApplicationByCandidateInternship(String candidateID, String internshipID) {
        List<Application> applications = applicationRepository.findAll();
        for (Application application : applications) {
            if (application.getCandidate().getID().equals(candidateID) && application.getInternship().getID().equals(internshipID))
                return application;
        }
        return null;
    }
}
