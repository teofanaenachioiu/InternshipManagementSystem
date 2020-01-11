package com.intern.Internship.repository;

import com.intern.Internship.model.CandidateAreaOfInterest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CandidateAreaOfInterestRepository extends JpaRepository<CandidateAreaOfInterest, String> {
    @Transactional
    @Modifying
    @Query("DELETE  FROM CandidateAreaOfInterest c WHERE c.areaOfInterest.ID =?1")
    void deleteByIdAreaOfInterest(String id);
}
