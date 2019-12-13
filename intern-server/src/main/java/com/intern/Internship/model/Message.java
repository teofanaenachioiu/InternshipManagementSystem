package com.intern.Internship.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class namenMessage implements HasID<String> {

    /**
     *
     */
    private static final long serialVersionUID = -3198996830497946136L;

    public Message(String name, String email, String subject, String phone, String message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.phone = phone;
        this.message = message;
    }

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String ID;

    private String name;
    private String email;
    private String subject;
    private String phone;
    private String message;
}