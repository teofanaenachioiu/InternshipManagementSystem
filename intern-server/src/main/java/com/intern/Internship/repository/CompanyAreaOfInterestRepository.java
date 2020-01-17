package com.intern.Internship.repository;

import com.intern.Internship.model.CandidateAreaOfInterest;
import com.intern.Internship.model.CompanyAreaOfInterest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CompanyAreaOfInterestRepository extends JpaRepository<CompanyAreaOfInterest, String> {
    @Transactional
    @Modifying
    @Query("DELETE  FROM CompanyAreaOfInterest c WHERE c.areaOfInterest.ID =?1")
    void deleteByIdAreaOfInterest(String id);
}
