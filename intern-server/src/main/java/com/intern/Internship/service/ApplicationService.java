package com.intern.Internship.service;

import com.intern.Internship.model.Application;
import com.intern.Internship.model.dto.ApplicationDTO;
import com.intern.Internship.model.dto.InternshipCandidateDTO;
import com.intern.Internship.model.enums.ApplicationStatus;

import java.util.List;

public interface ApplicationService {
    Application save(Application application);

    Application update(String candidateID, String internshipID, ApplicationStatus applicationStatus);

    List<ApplicationDTO> getApplicationsByUsername(String username);

    Application findApplicationByCandidateInternship(String candidateID, String internshipID);

    List<InternshipCandidateDTO> findAllCandidatesInternship(String internship_id);
}
