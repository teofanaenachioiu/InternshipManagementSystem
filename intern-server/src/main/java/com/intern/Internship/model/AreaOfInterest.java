package com.intern.Internship.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class AreaOfInterest implements HasID<String> {
    /**
     *
     */
    private static final long serialVersionUID = 4036466047949229704L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String ID;

    private String name;

    private String tagType;

    public AreaOfInterest(String name, String tagType) {
        this.name = name;
        this.tagType = tagType;
    }

    @Override
    public String toString() {
        return "AreaOfInterest{" + "ID='" + ID + '\'' + ", name='" + name + '\'' + ", tagType='" + tagType + '\'' + '}';
    }
}
