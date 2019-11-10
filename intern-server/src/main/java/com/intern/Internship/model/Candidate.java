package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import java.sql.Blob;
import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

enum Sex {
    M, F
}

enum CandidateStatus {
    Open, Pending, Uninterested;
}

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Candidate implements HasID<String> {
    /**
     *
     */
    private static final long serialVersionUID = 8194448036160968436L;

    @Id
    @Column(name = "email")
    private String ID; // email

    private String lastName;
    private String firstName;
    private String address;
    private String telephone;
    private LocalDate birthDate;
    private Sex sex;
    private CandidateStatus candidateStatus;
    private Blob avatar;
    private Blob CVPdf;
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private Set<Application> applications;

    public Candidate(String ID, String lastName, String firstName, String address, String telephone,
            LocalDate birthDate, Sex sex, CandidateStatus candidateStatus, Blob avatar, Blob CVPdf,
            Application... applications) {
        this.ID = ID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.telephone = telephone;
        this.birthDate = birthDate;
        this.sex = sex;
        this.candidateStatus = candidateStatus;
        this.avatar = avatar;
        this.CVPdf = CVPdf;
        this.applications = Stream.of(applications).collect(Collectors.toSet());
        this.applications.forEach(x -> x.setCandidate(this));
    }

    @Override
    public String toString() {
        return "Candidate{" + "email='" + ID + '\'' + ", lastName='" + lastName + '\'' + ", firstName='" + firstName
                + '\'' + ", address='" + address + '\'' + ", telephone='" + telephone + '\'' + ", birthDate="
                + birthDate + ", sex=" + sex + ", candidateStatus=" + candidateStatus + ", avatar=" + avatar
                + ", CVPdf=" + CVPdf + '}';
    }
}
