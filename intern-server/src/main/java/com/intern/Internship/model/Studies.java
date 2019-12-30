package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Studies implements HasID<String>{
    private static final long serialVersionUID=1230476547116308556L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String nameOfInstitution;
    private String profile;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    @ManyToOne
    @JoinColumn
    private Candidate candidate;

    public Studies(String nameOfInstitution, String profile, LocalDate startDate, LocalDate endDate, String description, Candidate candidate) {
        this.nameOfInstitution=nameOfInstitution;
        this.profile=profile;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.candidate = candidate;
    }

    @Override
    public String toString() {
        return "Studies{" +
                "ID='" + ID + '\'' +
                ", nameOfInstitution='" + nameOfInstitution + '\'' +
                ", profile='" + profile + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", description='" + description + '\'' +
                ", candidate=" + candidate.getID() +
                '}';
    }

}
