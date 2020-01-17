package com.intern.Internship.controller;

import javax.persistence.EntityNotFoundException;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.service.CandidateService;
import com.intern.Internship.service.ExperienceService;
import com.intern.Internship.service.StudiesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/secure/candidate")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;
    @Autowired
    private ExperienceService experienceService;

    @Autowired
    private StudiesService studiesService;

    @GetMapping()
    public ResponseEntity<Candidate> findByEmail(@RequestParam String email) {
        try {
            Candidate candidate = candidateService.findByEmail(email);
            return ResponseEntity.accepted().body(candidate);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.badRequest().body(new Candidate());
        }
    }

    @PostMapping()
    public ResponseEntity<Candidate> save(@RequestBody Candidate candidate) {
        try {
            Candidate result = candidateService.save(candidate);
            return ResponseEntity.ok().body(result);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new Candidate());
        }
    }

    @PutMapping()
    public ResponseEntity<Candidate> update(@RequestBody Candidate candidate) {
        try {
            experienceService.deleteAll(candidate);
            experienceService.saveAll(candidate, candidate.getExperiences());
            studiesService.deleteAll(candidate);
            studiesService.saveAll(candidate, candidate.getStudies());
            Candidate result = candidateService.update(candidate);
            return ResponseEntity.ok().body(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Candidate());
        }
    }
}