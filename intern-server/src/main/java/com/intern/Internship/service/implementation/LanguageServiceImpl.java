package com.intern.Internship.service.implementation;

import com.intern.Internship.repository.LanguageRepository;
import com.intern.Internship.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LanguageServiceImpl implements LanguageService {
    @Autowired
    LanguageRepository languageRepository;

}
