package com.intern.Internship.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}