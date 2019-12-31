package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class Experience implements HasID<String> {
    private static final long serialVersionUID = -8091428983912332212L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String companyName;
    private LocalDate startDate;
    private LocalDate endDate;
    private String jobName;
    @ManyToOne
    @JoinColumn
    private Candidate candidate;

    public Experience(String companyName, LocalDate startDate, LocalDate endDate, String jobName, Candidate candidate) {
        this.companyName = companyName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.jobName = jobName;
        this.candidate = candidate;
    }
}
