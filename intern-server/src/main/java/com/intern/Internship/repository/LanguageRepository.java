package com.intern.Internship.repository;

import com.intern.Internship.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface LanguageRepository extends JpaRepository<Language, String> {
    @Query("SELECT c FROM Language c WHERE c.name = ?1")
    Language findLanguageByName(String language);


}
