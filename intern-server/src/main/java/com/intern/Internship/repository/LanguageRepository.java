package com.intern.Internship.repository;

import com.intern.Internship.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface LanguageRepository extends JpaRepository<Language, String> {
    @Query("SELECT c FROM Language c WHERE c.name = ?1")
    Language findByName(String language);

    @Query("SELECT a.name from Language a,CandidateLanguage c WHERE  c.language.ID like a.ID and c.candidate.ID=?1 ")
    List<String> getAllByEmail(String email);

}
