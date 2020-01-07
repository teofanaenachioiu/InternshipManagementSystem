package com.intern.Internship.service;

import com.intern.Internship.model.Application;
import com.intern.Internship.model.dto.ApplicationDTO;

import java.util.List;

public interface ApplicationService {
    Application save(Application application);

    List<ApplicationDTO> getApplicationsByUsername(String username);

    Application findApplicationByCandidateInternship(String candidateID, String internshipID);
}
