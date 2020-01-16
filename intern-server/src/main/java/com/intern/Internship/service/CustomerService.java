package com.intern.Internship.service;

import java.util.Optional;

import com.intern.Internship.model.Customer;

import org.springframework.security.core.userdetails.User;

public interface CustomerService {
    void save(Customer user);

    Customer findByUsername(String username);

    Customer update(Customer user);

    Customer findByUser(String username, String password);

    Optional<User> findByToken(String token);

    boolean changePassword(String username, String newPassword);
}