package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Blob;
import java.time.LocalDate;

enum Sex{
    M,F
}

enum CandidateStatus{
    Open,Pending,Uninterested;
}

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Candidate {
    @Id
    private String ID; //email

    private String password;
    private String lastName;
    private String firstName;
    private String address;
    private String telephone;
    private LocalDate birthDate;
    private Sex sex;
    private CandidateStatus candidateStatus;
    private Blob avatar;
    private Blob CVPdf;

    public Candidate(String ID, String password, String lastName, String firstName, String address, String telephone, LocalDate birthDate, Sex sex, CandidateStatus candidateStatus, Blob avatar, Blob CVPdf) {
        this.ID = ID;
        this.password = password;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.telephone = telephone;
        this.birthDate = birthDate;
        this.sex = sex;
        this.candidateStatus = candidateStatus;
        this.avatar = avatar;
        this.CVPdf = CVPdf;
    }
}
