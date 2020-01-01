package com.intern.Internship.service.implementation;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.repository.CandidateRepository;
import com.intern.Internship.service.CandidateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CandidateServiceImpl implements CandidateService {
    @Autowired
    CandidateRepository candidateRepository;

    @Override
    public Candidate findByEmail(String email) {
        return candidateRepository.getOne(email);
    }

    @Override
    public Candidate save(Candidate candidate) {
        if (candidate == null)
            throw new IllegalArgumentException();
        return candidateRepository.save(candidate);
    }

    @Override
    public Candidate update(Candidate candidate) {
        if (candidate == null || findByEmail(candidate.getID()) == null) {
            throw new IllegalArgumentException();
        }
        return save(candidate);
    }
}