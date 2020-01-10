package com.intern.Internship.controller;

import com.intern.Internship.model.Role;
import com.intern.Internship.model.Customer;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserControllerTest {
    @Autowired
    CustomerController userController;

    @Test
    void login() {
        Customer customer = new Customer();
        customer.setUsername("User1");
        customer.setPassword("Password1");
        Role role = new Role();
        role.setName("CANDIDATE");
        customer.setRole(role);

        ResponseEntity<Customer> loginResult = userController.login(customer);
        assert (loginResult.getBody().getUsername() == null);

        customer.setUsername("candidate@test.com");
        customer.setPassword("candidate");
        loginResult = userController.login(customer);
        assert (loginResult.getBody().getUsername().equals("candidate@test.com"));
    }
}