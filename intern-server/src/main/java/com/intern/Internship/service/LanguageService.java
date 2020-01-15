package com.intern.Internship.service;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Language;

import java.util.List;

public interface LanguageService {
    List<String> findAll();

    List<String> findAll(String email);

    void update(String email, List<String> languages);
}
