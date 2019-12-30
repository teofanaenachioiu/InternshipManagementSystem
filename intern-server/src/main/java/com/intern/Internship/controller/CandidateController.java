package com.intern.Internship.controller;

import javax.persistence.EntityNotFoundException;

import com.intern.Internship.model.Candidate;
import com.intern.Internship.service.CandidateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/candidate")
@CrossOrigin(origins = "http://localhost:4200")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

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
}