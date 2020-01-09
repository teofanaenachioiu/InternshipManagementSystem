package com.intern.Internship.repository;

import com.intern.Internship.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, String> {

}
