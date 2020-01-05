package com.intern.Internship.controller;

import com.intern.Internship.model.Role;
import com.intern.Internship.model.User;
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
    UserController userController;

    @Test
    void login() {
        User user = new User();
        user.setUsername("User1");
        user.setPassword("Password1");
        Role role = new Role();
        role.setName("CANDIDATE");
        user.setRole(role);

        ResponseEntity<User> loginResult = userController.login(user);
        assert (loginResult.getBody().getUsername() == null);

        user.setUsername("candidate@test.com");
        user.setPassword("candidate");
        loginResult = userController.login(user);
        assert (loginResult.getBody().getUsername().equals("candidate@test.com"));
    }
}