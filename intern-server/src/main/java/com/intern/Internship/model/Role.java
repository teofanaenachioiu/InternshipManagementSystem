package com.intern.Internship.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Role {
    @Id
    private String name; // CANDIDATE, COMPANY

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    private Set<User> user;
}
