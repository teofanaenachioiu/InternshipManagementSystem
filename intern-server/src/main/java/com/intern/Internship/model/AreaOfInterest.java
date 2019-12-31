package com.intern.Internship.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.hibernate.annotations.GenericGenerator;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class AreaOfInterest implements HasID<String> {
    private static final long serialVersionUID = 4036466047949229704L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String ID;

    private String name;

    private String tagType;

    public AreaOfInterest(String name, String tagType) {
        this.name = name;
        this.tagType = tagType;
    }
}
