package com.intern.Internship.service.implementation;

import java.util.Set;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.model.Experience;
import com.intern.Internship.model.Studies;
import com.intern.Internship.repository.StudiesRepository;
import com.intern.Internship.service.StudiesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class StudiesServiceImpl implements StudiesService {

    @Autowired
    StudiesRepository studiesRepository;

    @Override
    public Studies save(Studies studies) {
        if (studies == null)
            throw new IllegalArgumentException();
        return studiesRepository.save(studies);
    }

    @Override
    public void saveAll(Candidate candidate, Set<Studies> studies) {
        if (studies == null) {
            throw new IllegalArgumentException();
        }
        for (Studies study : studies) {
            study.setCandidate(candidate);
            studiesRepository.save(study);
        }
    }

    @Override
    public Studies update(Studies studies) {
        if (studies == null || studiesRepository.findById(studies.getID()).isPresent()) {
            throw new IllegalArgumentException();
        }
        return save(studies);
    }

    @Override
    public void delete(Studies studies) {
        studiesRepository.delete(studies);
    }

    @Override
    public void deleteAll(Candidate candidate) {
        for (Studies studies : studiesRepository.findAll())
            if (studies.getCandidate().getID().equals(candidate.getID()))
                studiesRepository.delete(studies);
    }
}