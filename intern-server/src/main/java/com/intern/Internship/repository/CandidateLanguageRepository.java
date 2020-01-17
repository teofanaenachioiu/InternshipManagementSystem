package com.intern.Internship.repository;

import com.intern.Internship.model.CandidateLanguage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CandidateLanguageRepository extends JpaRepository<CandidateLanguage, String> {
    @Transactional
    @Modifying
    @Query("DELETE  FROM CandidateLanguage c WHERE c.language.ID =?1")
    void deleteByIdLanguage(String id);
}
