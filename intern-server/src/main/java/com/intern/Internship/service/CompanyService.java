package com.intern.Internship.service;

import com.intern.Internship.model.Company;

public interface CompanyService {
    Company findByEmail(String email);

    Company save(Company company);
}