package com.intern.Internship.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.intern.Internship.model.enums.ApplicationStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class Application implements HasID<String> {
    private static final long serialVersionUID = -5767568983912334912L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String ID;

    private ApplicationStatus applicationStatus;
    private String extraMessage;
    @ManyToOne
    @JoinColumn
    @JsonIdentityInfo(generator = ObjectIdGenerators.StringIdGenerator.class, property = "@ID")
    private Internship internship;
    @ManyToOne
    @JoinColumn
    @JsonIdentityInfo(generator = ObjectIdGenerators.StringIdGenerator.class, property = "@ID")
    private Candidate candidate;

    /**
     * Application constructor
     * 
     * @param applicationStatus: ApplicationStatus, may be Applied, Replied or
     *                           Accepted
     * @param extraMessage:      String
     * @param internship:        Internship
     * @param candidate:         Candidate
     */
    public Application(ApplicationStatus applicationStatus, String extraMessage, Internship internship,
            Candidate candidate) {
        this.applicationStatus = applicationStatus;
        this.extraMessage = extraMessage;
        this.internship = internship;
        this.candidate = candidate;
    }

}
