package com.intern.Internship.service;

import com.intern.Internship.model.Company;
import com.intern.Internship.model.dto.CompanyDTO;

public interface CompanyService {
    Company findByEmail(String email);

    Company save(Company company);

    CompanyDTO save(CompanyDTO company);

    CompanyDTO update(CompanyDTO companyDTO);

    Company findByName(String name);
}