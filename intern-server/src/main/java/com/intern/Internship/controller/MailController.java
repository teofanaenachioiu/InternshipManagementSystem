package com.intern.Internship.controller;

import com.intern.Internship.model.Message;
import com.intern.Internship.model.validator.ValidationException;
import com.intern.Internship.service.MessageService;
import com.intern.Internship.utils.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MailController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/api/home/email")
    public ResponseEntity<String> registration(@RequestBody Message message) {
        try {
            messageService.save(message);
            String subject = "Thanks for your feedback!";
            String body = "Have a nice day!";
            Email.sendMail(subject, body, message.getEmail());
            return ResponseEntity.ok().body("Successfully sent email.");
        } catch (ValidationException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

}