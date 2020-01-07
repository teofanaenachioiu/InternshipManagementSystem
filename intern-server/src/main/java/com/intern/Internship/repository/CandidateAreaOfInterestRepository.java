package com.intern.Internship.repository;

import com.intern.Internship.model.CandidateAreaOfInterest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CandidateAreaOfInterestRepository extends JpaRepository<CandidateAreaOfInterest, String> {

}
