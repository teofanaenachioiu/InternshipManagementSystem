package com.intern.Internship.service.implementation;

import java.util.HashSet;
import java.util.Set;

import com.intern.Internship.model.Customer;
import com.intern.Internship.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//This is the class used for login/authentication

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private CustomerRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) {
        Customer customer = userRepository.findByUsername(username);
        if (customer == null)
            throw new UsernameNotFoundException(username);

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

        grantedAuthorities.add(new SimpleGrantedAuthority(customer.getRole().getName()));

        return new org.springframework.security.core.userdetails.User(customer.getUsername(), customer.getPassword(),
                grantedAuthorities);
    }

}