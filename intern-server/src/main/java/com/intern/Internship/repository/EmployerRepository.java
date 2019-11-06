package com.intern.Internship.repository;

import com.intern.Internship.model.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<Employer,String> {
}
