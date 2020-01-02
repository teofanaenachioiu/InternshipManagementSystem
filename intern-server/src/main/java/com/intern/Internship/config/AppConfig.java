package com.intern.Internship.config;

import com.intern.Internship.model.validator.InternshipDTOValidator;
import com.intern.Internship.model.validator.MessageValidator;
import com.intern.Internship.model.validator.UserValidator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public UserValidator userValidator(){return new UserValidator();}

    @Bean
    public InternshipDTOValidator internshipDTOValidator(){return new InternshipDTOValidator();}

    @Bean
    public MessageValidator messageValidator(){return new MessageValidator();}
}
