package com.intern.Internship.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class CompanyAreaOfInterest implements HasID<String> {
    private static final long serialVersionUID = -3534054198190203549L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String ID;

    @ManyToOne
    @JoinColumn
    @JsonIdentityInfo(generator = ObjectIdGenerators.StringIdGenerator.class, property = "@email")
    @ToString.Exclude
    private Company company;

    @ManyToOne
    @JoinColumn
    @JsonIdentityInfo(generator = ObjectIdGenerators.StringIdGenerator.class, property = "@ID")
    @ToString.Exclude
    private AreaOfInterest areaOfInterest;

    public CompanyAreaOfInterest(Company company, AreaOfInterest areaOfInterest) {
        this.company = company;
        this.areaOfInterest = areaOfInterest;
    }


}
