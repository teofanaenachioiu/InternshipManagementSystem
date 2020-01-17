package com.intern.Internship.service.implementation;

import java.util.Optional;

import com.intern.Internship.model.Customer;
import com.intern.Internship.model.validator.Validator;
import com.intern.Internship.repository.CustomerRepository;
import com.intern.Internship.service.ServiceException;
import com.intern.Internship.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private Validator<Customer> validator;

    @Override
    public void save(Customer customer) {

        validator.validate(customer);

        if (customerRepository.existsById(customer.getUsername()))
            throw new ServiceException("customer already exists");

        customer.setPassword(bCryptPasswordEncoder.encode(customer.getPassword()));

        customerRepository.save(customer);
    }

    @Override
    public Customer update(Customer customer) {
        customer.setToken(customer.getToken());
        return customerRepository.save(customer);
    }

    @Override
    public Customer findByUsername(String username) {
        return customerRepository.findByUsername(username);
    }

    @Override
    public Customer findByUser(String username, String password) {
        Customer customer = customerRepository.findByUsername(username);
        if (bCryptPasswordEncoder.matches(password, customer.getPassword())) {
            return customer;
        }
        return null;
    }

    @Override
    public boolean changePassword(String username, String newPassword) {
        if (newPassword.length() < 6 || newPassword.length() > 24)
            throw new ServiceException("Your password is invalid!");

        Customer customer = customerRepository.findByUsername(username);
        if(customer ==null) return false;
        customerRepository.delete(customer);
        customer.setPassword(bCryptPasswordEncoder.encode(newPassword));
        customerRepository.save(customer);
        return true;
    }

    @Override
    public Optional<User> findByToken(String token) {
        Optional<Customer> customer = customerRepository.findByToken(token);
        if (customer.isPresent()) {
            Customer user1 = customer.get();
            User user = new User(user1.getUsername(), user1.getPassword(), true, true, true, true,
                    AuthorityUtils.createAuthorityList("CANDIDATE", "COMPANY"));
            return Optional.of(user);
        }
        return Optional.empty();
    }
}