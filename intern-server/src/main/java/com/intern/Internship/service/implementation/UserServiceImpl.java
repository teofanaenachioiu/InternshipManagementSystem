package com.intern.Internship.service.implementation;

import com.intern.Internship.model.User;
import com.intern.Internship.model.validator.Validator;
import com.intern.Internship.repository.UserRepository;
import com.intern.Internship.service.ServiceException;
import com.intern.Internship.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private Validator<User> validator;

    @Override
    public void save(User user) {
        validator.validate(user); //validates the given user

        if (userRepository.existsById(user.getUsername()))
            throw new ServiceException("user already exists");

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
        if (bCryptPasswordEncoder.matches(password, user.getPassword())) {
            return user;
        }
        return null;
    }

    @Override
    public void changePassword(String username, String newPassword) {
        if(newPassword.length()<6 || newPassword.length()>24) throw new ServiceException("Your password is invalid!");

        User user = userRepository.findByUsername(username);
        userRepository.delete(user);
        user.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userRepository.save(user);
    }
}