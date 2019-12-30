package com.intern.Internship.controller;

import javax.persistence.EntityNotFoundException;

import com.intern.Internship.model.Company;
import com.intern.Internship.service.CompanyService;

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
@RequestMapping(value = "/api/company")
@CrossOrigin(origins = "http://localhost:4200")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @GetMapping()
    public ResponseEntity<Company> findByEmail(@RequestParam String email) {
        try {
            Company company = companyService.findByEmail(email);
            return ResponseEntity.accepted().body(company);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.badRequest().body(new Company());
        }
    }

    @PostMapping()
    public ResponseEntity<Company> save(@RequestBody Company company) {
        try {
            Company result = companyService.save(company);
            return ResponseEntity.ok().body(result);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new Company());
        }
    }

}
