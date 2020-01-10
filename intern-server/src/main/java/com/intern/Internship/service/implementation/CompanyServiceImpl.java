package com.intern.Internship.service.implementation;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.intern.Internship.model.Company;
import com.intern.Internship.model.dto.CompanyDTO;
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
        Optional<Company> company = companyRepository.findById(email);
        if (!company.isPresent())
            throw new EntityNotFoundException();
        return company.get();
    }

    @Override
    public Company findByName(String name) {
        return companyRepository.findCompany(name);
    }

    @Override
    public CompanyDTO save(CompanyDTO companyDTO) {
        if (companyDTO == null)
            throw new IllegalArgumentException();
        Company company = companyRepository.save(new Company(
                companyDTO.getID(),
                companyDTO.getName(),
                companyDTO.getAddress(),
                companyDTO.getTelephone(),
                companyDTO.getDescription(),
                companyDTO.getField(),
                companyDTO.getLogo()
                )
        );
        return new CompanyDTO(
                company.getID(),
                company.getName(),
                company.getAddress(),
                company.getTelephone(),
                company.getDescription(),
                company.getField(),
                company.getLogo()
        );
    }

    @Override
    public Company save(Company company) {
        if (company == null)
            throw new IllegalArgumentException();
        return companyRepository.save(company);
    }

    @Override
    public CompanyDTO update(CompanyDTO companyDTO) {
        if (companyDTO == null || findByEmail(companyDTO.getID()) == null) {
            throw new IllegalArgumentException();
        }
        Company company = companyRepository.getOne(companyDTO.getID());
        company.setName(companyDTO.getName());
        company.setAddress(companyDTO.getAddress());
        company.setTelephone(companyDTO.getTelephone());
        company.setDescription(companyDTO.getDescription());
        company.setField(companyDTO.getField());
        company.setLogo(companyDTO.getLogo());
        Company savedCompany = save(company);
        return new CompanyDTO(
                savedCompany.getID(),
                savedCompany.getName(),
                savedCompany.getAddress(),
                savedCompany.getTelephone(),
                savedCompany.getDescription(),
                savedCompany.getField(),
                savedCompany.getLogo()
        );
    }
}