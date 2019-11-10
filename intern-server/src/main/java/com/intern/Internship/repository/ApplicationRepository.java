package com.intern.Internship.repository;

import com.intern.Internship.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application,String> {
}
