package com.intern.Internship.service;

import com.intern.Internship.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}