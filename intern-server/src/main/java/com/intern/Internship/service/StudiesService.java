package com.intern.Internship.service;

import java.util.Set;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.model.Studies;

public interface StudiesService {
    Studies save(Studies studies);

    void saveAll(Candidate candidate, Set<Studies> studies);

    Studies update(Studies studies);

    void delete(Studies studies);

    void deleteAll(Candidate candidate);
}