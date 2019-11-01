package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

enum ApplicationStatus{
    Applied, Replied, Accepted
}

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Application implements HasID<String> {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private ApplicationStatus applicationStatus;
    private String extraMessage;
    private Internship internship;
    private Candidate candidate;

    public Application(ApplicationStatus applicationStatus, String extraMessage, Internship internship, Candidate candidate) {
        this.applicationStatus = applicationStatus;
        this.extraMessage = extraMessage;
        this.internship = internship;
        this.candidate = candidate;
    }

    @Override
    public String toString() {
        return "Application{" +
                "ID='" + ID + '\'' +
                ", applicationStatus=" + applicationStatus +
                ", extraMessage='" + extraMessage + '\'' +
                ", internship=" + internship +
                ", candidate=" + candidate +
                '}';
    }
}
