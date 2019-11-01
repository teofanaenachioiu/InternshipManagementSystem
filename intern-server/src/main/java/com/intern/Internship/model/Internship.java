package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

enum InternshipStatus{
    Open, Closed;
}

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Internship {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String name;
    private LocalDate startTime;
    private LocalDate endTime;
    private Boolean paid;
    private int nrMonths;
    private String field;
    private String description;
    private int nrApplicants;
    private InternshipStatus status;
    private String location;
    private LocalDate addedDate;
    private Employer employer;
    private AreaOfInterest areaOfInterest;

    public Internship(String name, LocalDate startTime, LocalDate endTime, Boolean paid, int nrMonths, String field, String description, int nrApplicants, InternshipStatus status, String location, LocalDate addedDate,Employer employer,AreaOfInterest areaOfInterest) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.paid = paid;
        this.nrMonths = nrMonths;
        this.field = field;
        this.description = description;
        this.nrApplicants = nrApplicants;
        this.status = status;
        this.location = location;
        this.addedDate = addedDate;
        this.employer=employer;
        this.areaOfInterest=areaOfInterest;
    }
}
