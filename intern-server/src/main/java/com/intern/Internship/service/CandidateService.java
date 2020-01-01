package com.intern.Internship.service;

import com.intern.Internship.model.Candidate;

public interface CandidateService {
    Candidate findByEmail(String email);

    Candidate save(Candidate candidate);

    Candidate update(Candidate candidate);
}