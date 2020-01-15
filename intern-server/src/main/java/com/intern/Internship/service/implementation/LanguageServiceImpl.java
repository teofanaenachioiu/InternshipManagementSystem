package com.intern.Internship.service.implementation;

import com.intern.Internship.model.*;
import com.intern.Internship.repository.AreaOfInterestRepository;
import com.intern.Internship.repository.CandidateLanguageRepository;
import com.intern.Internship.repository.CandidateRepository;
import com.intern.Internship.repository.LanguageRepository;
import com.intern.Internship.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LanguageServiceImpl implements LanguageService {
    @Autowired
    LanguageRepository languageRepository;

    @Autowired
    CandidateRepository candidateRepository;

    @Autowired
    CandidateLanguageRepository candidateLanguageRepository;

    @Override
    public List<String> findAll() {
        List<Language> languages = languageRepository.findAll();
        List<String> result = new ArrayList<>();
        for (Language language : languages) {
            result.add(language.getName());
        }
        return result;
    }


    @Override
    public List<String> findAll(String email) {
        Optional<Candidate> candidate = candidateRepository.findById(email);
        if (!candidate.isPresent())
            throw new EntityNotFoundException();
        List<String> list = languageRepository.getAllByEmail(email);
        return list;
    }

    @Override
    public void update(String email, List<String> languages) {
        Optional<Candidate> candidate = candidateRepository.findById(email);
        if (!candidate.isPresent())
            throw new EntityNotFoundException();

        List<String> currentLanguagesDeleted = this.findAll(email);
        List<String> currentLanguagesAll = this.findAll(email);
        currentLanguagesDeleted.removeAll(languages);//deleted
        languages.removeAll(currentLanguagesAll); //added
        for(String name: currentLanguagesDeleted){
            Language language =languageRepository.findByName(name);
            candidateLanguageRepository.deleteByIdLanguage(language.getID());
        }
        for(String name:languages){
            Language language =languageRepository.findByName(name);
            if(language == null) {
                language = new Language(name);
                language =languageRepository.save(language);
            }
            CandidateLanguage candidateLanguage =new CandidateLanguage(candidate.get(),language);
            candidateLanguageRepository.save(candidateLanguage);
        }
    }
}
