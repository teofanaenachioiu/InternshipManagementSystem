package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class AreaOfInterest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String name;
    private String tagType;
}
