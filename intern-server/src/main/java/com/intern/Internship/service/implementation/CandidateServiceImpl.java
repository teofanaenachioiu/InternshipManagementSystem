package com.intern.Internship.service.implementation;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

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
        Optional<Candidate> candidate = candidateRepository.findById(email);
        if (!candidate.isPresent())
            throw new EntityNotFoundException();
        return candidate.get();
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