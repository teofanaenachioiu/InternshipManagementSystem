package com.intern.Internship.model;

import javax.persistence.Entity;
import javax.persistence.Id;

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
}
