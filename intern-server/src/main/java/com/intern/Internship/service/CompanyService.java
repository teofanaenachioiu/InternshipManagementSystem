package com.intern.Internship.service;

import com.intern.Internship.model.Company;

public interface CompanyService {
    Company findByEmail(String email);

    Company save(Company company);

    Company update(Company company);

    Company findByName(String name);
}