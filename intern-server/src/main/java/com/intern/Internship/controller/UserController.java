package com.intern.Internship.controller;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.intern.Internship.model.User;
import com.intern.Internship.service.SecurityService;
import com.intern.Internship.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @GetMapping("/api/auth/signup")
    public String registration(Model model) {
        model.addAttribute("userForm", new User());

        return "registration";
    }

    @PostMapping("/api/auth/signup")
    public ResponseEntity<User> registration(@RequestBody User userForm) { // , BindingResult bindingResult

        // if (bindingResult.hasErrors()) {
        // return "registration";
        // }
        System.out.println("userForm " + userForm.getUsername());
        String token = getJWTToken(userForm.getUsername());
        userForm.setToken(token);
        System.out.println("token " + token);

        userService.save(userForm);
        securityService.autoLogin(userForm.getUsername(), userForm.getPassword());

        return ResponseEntity.accepted().body(userForm);
    }

    @GetMapping("/api/auth/login")
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "ana";
    }

    @GetMapping({ "/", "/api/auth/welcome" })
    public String welcome(Model model) {
        return "welcome";
    }

    private String getJWTToken(String username) {
        String secretKey = "mySecretKey";
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_USER");

        String token = Jwts.builder().setId("softtekJWT").setSubject(username)
                .claim("authorities",
                        grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SignatureAlgorithm.HS512, secretKey.getBytes()).compact();

        return token;
    }
}