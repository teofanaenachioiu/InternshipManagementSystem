package com.intern.Internship.service;

import com.intern.Internship.model.User;
import com.intern.Internship.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findByUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        String passEncode = bCryptPasswordEncoder.encode(user.getPassword());
        if (user.getPassword() == passEncode) {
            return user;
        }
        return null;
    }
}