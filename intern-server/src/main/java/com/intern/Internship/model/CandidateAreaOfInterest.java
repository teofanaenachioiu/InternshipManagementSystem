package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class CandidateAreaOfInterest implements HasID<String> {
    private static final long serialVersionUID = -4717317832931776150L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private Candidate candidate;
    private AreaOfInterest areaOfInterest;
}
