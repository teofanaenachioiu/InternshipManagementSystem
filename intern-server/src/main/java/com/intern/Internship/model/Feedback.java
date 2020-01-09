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

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class Feedback implements HasID<String> {
    private static final long serialVersionUID = -3534054198190203549L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String ID;

    private String description;
    private Boolean anonymous;
    private int rating;

    @ManyToOne
    @JoinColumn
    private Candidate candidate;

    @ManyToOne
    @JoinColumn
    @JsonIdentityInfo(generator = ObjectIdGenerators.StringIdGenerator.class, property = "@ID")
    @ToString.Exclude
    private Internship internship;

    /**
     * Feedback constructor
     * 
     * @param description: String
     * @param anonymous:   Boolean
     * @param rating:      int
     * @param internship:  Internship
     */
    public Feedback(String description, Boolean anonymous, int rating, Candidate candidate, Internship internship) {
        this.description = description;
        this.anonymous = anonymous;
        this.rating = rating;
        this.candidate = candidate;
        this.internship = internship;
    }
}
