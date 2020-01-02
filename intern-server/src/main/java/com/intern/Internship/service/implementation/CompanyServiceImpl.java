package com.intern.Internship.service.implementation;

import com.intern.Internship.model.Company;
import com.intern.Internship.repository.CompanyRepository;
import com.intern.Internship.service.CompanyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public Company findByEmail(String email) {
        return companyRepository.getOne(email);
    }

    @Override
    public Company findByName(String name) {
        return companyRepository.findCompany(name);
    }

    @Override
    public Company save(Company company) {
        if (company == null)
            throw new IllegalArgumentException();
        return companyRepository.save(company);
    }

    @Override
    public Company update(Company company) {     
        if (company == null || findByEmail(company.getID()) == null) {
            throw new IllegalArgumentException();
        }
        return save(company);
    }
}