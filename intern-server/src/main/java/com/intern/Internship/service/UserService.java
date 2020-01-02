package com.intern.Internship.service;

import com.intern.Internship.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);

    User findByUser(String username, String password);

    void changePassword(String username, String newPassword);
}