package com.intern.Internship.repository;

import com.intern.Internship.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CompanyRepository extends JpaRepository<Company, String> {

    @Query("SELECT c FROM Company c WHERE c.name = ?1")
    Company findCompany(String companyName);
}
