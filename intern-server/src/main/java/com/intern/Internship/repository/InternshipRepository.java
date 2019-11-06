package com.intern.Internship.repository;

import com.intern.Internship.model.Internship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InternshipRepository extends JpaRepository<Internship,String> {
}
