package com.intern.Internship.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.intern.Internship.model.Role;

import org.hibernate.annotations.ColumnDefault;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class User implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = -8413271848855656581L;

    @Id
    @Column(name = "email")
    private String username; // email
    private String password;

    @ColumnDefault("-1")
    private String token;

    @ManyToOne
    @JoinColumn
    private Role role;
}