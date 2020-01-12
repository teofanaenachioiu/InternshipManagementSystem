package com.intern.Internship.controller;

import javax.persistence.EntityNotFoundException;

import com.intern.Internship.model.Company;
import com.intern.Internship.model.dto.CompanyDTO;
import com.intern.Internship.service.CompanyService;

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
@RequestMapping(value = "/api/secure/company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @GetMapping()
    public ResponseEntity<CompanyDTO> findByEmail(@RequestParam String email) {
        try {
            Company company = companyService.findByEmail(email);
            CompanyDTO companyDTO = new CompanyDTO(company.getID(), company.getName(), company.getAddress(),
                    company.getTelephone(), company.getDescription(), company.getField(), company.getLogo());
            return ResponseEntity.accepted().body(companyDTO);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.badRequest().body(new CompanyDTO());
        }
    }

    @PostMapping()
    public ResponseEntity<CompanyDTO> save(@RequestBody CompanyDTO companyDTO) {
        try {
            CompanyDTO result = companyService.save(companyDTO);
            return ResponseEntity.ok().body(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new CompanyDTO());
        }
    }

    @PutMapping()
    public ResponseEntity<CompanyDTO> update(@RequestBody CompanyDTO companyDTO) {
        try {
            CompanyDTO result = companyService.update(companyDTO);
            return ResponseEntity.ok().body(result);
        } catch (IllegalArgumentException | EntityNotFoundException e) {
            return ResponseEntity.badRequest().body(new CompanyDTO());
        }
    }
}
