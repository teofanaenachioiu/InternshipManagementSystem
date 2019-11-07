package com.intern.Internship.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class AreaOfInterest implements HasID<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String name;

    private String tagType;

    @Override
    public String toString() {
        return "AreaOfInterest{" + "ID='" + ID + '\'' + ", name='" + name + '\'' + ", tagType='" + tagType + '\'' + '}';
    }
}
