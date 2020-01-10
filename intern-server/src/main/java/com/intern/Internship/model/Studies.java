package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class Studies implements HasID<String> {
    private static final long serialVersionUID = 1230476547116308556L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String ID;

    private String nameOfInstitution;
    private String profile;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn
    @JsonIgnore
    private Candidate candidate;

    /**
     * Studies constructor
     * 
     * @param nameOfInstitution: String
     * @param profile:           String
     * @param startDate:         LocalDate
     * @param endDate:           LocalDate
     * @param description:       String
     * @param candidate:         Candidate
     */
    public Studies(String nameOfInstitution, String profile, LocalDate startDate, LocalDate endDate, String description,
            Candidate candidate) {
        this.nameOfInstitution = nameOfInstitution;
        this.profile = profile;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.candidate = candidate;
    }
}
