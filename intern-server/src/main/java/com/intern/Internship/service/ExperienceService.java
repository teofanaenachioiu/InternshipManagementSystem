package com.intern.Internship.service;

import java.util.Set;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.model.Experience;

public interface ExperienceService {
    Experience save(Experience experience);

    void saveAll(Candidate candidate, Set<Experience> experiences);

    void deleteAll(Candidate candidate);

    Experience update(Experience experience);

    void delete(Experience experience);
}