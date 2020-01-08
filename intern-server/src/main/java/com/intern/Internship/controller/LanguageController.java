package com.intern.Internship.controller;

import com.intern.Internship.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/language")
@CrossOrigin(origins = "http://localhost:4200")
public class LanguageController {
    @Autowired
    LanguageService languageService;



}
