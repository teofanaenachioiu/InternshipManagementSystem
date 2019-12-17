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
            System.out.println("EMAIL: " + email);
            Candidate candidate = candidateService.findByEmail(email);
            System.out.println(candidate);
            return ResponseEntity.accepted().body(candidate);
            // return ResponseEntity.ok().body("test");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.badRequest().body(new Candidate());
            // return ResponseEntity.ok().body("failed");
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