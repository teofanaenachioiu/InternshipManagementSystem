package com.intern.Internship.repository;

import com.intern.Internship.model.CandidateLanguage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateLanguageRepository extends JpaRepository<CandidateLanguage, String> {
}
