package com.intern.Internship.service;

import java.util.Optional;

import com.intern.Internship.model.Customer;

public interface CustomerService {
    void save(Customer user);

    Customer findByUsername(String username);

    Customer findByUser(String username, String password);

    Optional<Customer> findByToken(String token);

    void changePassword(String username, String newPassword);
}