package com.intern.Internship.model;

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

enum ApplicationStatus {
    Applied, Replied, Accepted
}

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class Application implements HasID<String> {
    private static final long serialVersionUID = -5767568983912334912L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String ID;

    private ApplicationStatus applicationStatus;
    private String extraMessage;
    @ManyToOne
    @JoinColumn
    private Internship internship;
    @ManyToOne
    @JoinColumn
    private Candidate candidate;

    public Application(ApplicationStatus applicationStatus, String extraMessage, Internship internship,
            Candidate candidate) {
        this.applicationStatus = applicationStatus;
        this.extraMessage = extraMessage;
        this.internship = internship;
        this.candidate = candidate;
    }

}
