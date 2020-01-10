package com.intern.Internship.repository;

import java.util.Optional;

import com.intern.Internship.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, String> {
    Customer findByUsername(String username);

    Optional<Customer> findByToken(String token);
}