package com.intern.Internship.service.implementation;

import java.util.Set;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.model.Experience;
import com.intern.Internship.repository.ExperienceRepository;
import com.intern.Internship.service.ExperienceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
class ExperienceServiceImpl implements ExperienceService {

    @Autowired
    ExperienceRepository experienceRepository;

    @Override
    public Experience save(Experience experience) {
        if (experience == null)
            throw new IllegalArgumentException();
        return experienceRepository.save(experience);
    }

    @Override
    public Experience update(Experience experience) {
        if (experience == null || experienceRepository.findById(experience.getID()).isPresent()) {
            throw new IllegalArgumentException();
        }
        return save(experience);
    }

    @Override
    public void delete(Experience experience) {
        experienceRepository.delete(experience);
    }

    @Override
    public void saveAll(Candidate candidate, Set<Experience> experiences) {
        if (experiences == null) {
            throw new IllegalArgumentException();
        }
        for (Experience experience : experiences) {
            experience.setCandidate(candidate);
            experienceRepository.save(experience);
        }
    }
}