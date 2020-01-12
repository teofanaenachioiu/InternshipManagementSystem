package com.intern.Internship.config;

import java.util.Optional;

import com.intern.Internship.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

    @Autowired
        CustomerService customerService;

        @Override
        protected void additionalAuthenticationChecks(UserDetails userDetails,
                        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken)
                        throws AuthenticationException {
        }

        @Bean
        public BCryptPasswordEncoder passwordEncoder() {
                return new BCryptPasswordEncoder();
        }

        @Override
        protected UserDetails retrieveUser(String userName,
                        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken)
                        throws AuthenticationException {

                Object token = usernamePasswordAuthenticationToken.getCredentials();
                return Optional.ofNullable(token).map(String::valueOf).flatMap(customerService::findByToken)
                                .orElseThrow(() -> new UsernameNotFoundException(
                                                "Cannot find user with authentication token=" + token));
        }
}