package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import java.time.LocalDate;
import java.util.HashSet;
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
    @Lob
    @Column(name = "avatar", columnDefinition = "BLOB")
    private byte[] avatar;
    private String linkLinkedin;
    private String linkGithub;
    private String description;
    private String languages;
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private Set<Application> applications;
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private Set<Studies> studies;
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private Set<Experience> experiences;

    public Candidate(String ID, String lastName, String firstName, String address, String telephone,
            LocalDate birthDate, Sex sex, CandidateStatus candidateStatus, byte[] avatar, String linkLinkedin,
            String linkGithub, String description, String languages, Set<Studies> studies, Set<Experience> experiences,
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
        this.linkLinkedin = linkLinkedin;
        this.linkGithub = linkGithub;
        this.description = description;
        this.languages = languages;

        this.studies = new HashSet<>();
        this.studies.addAll(studies);
        this.studies.forEach(x -> x.setCandidate(this));

        this.experiences = new HashSet<>();
        this.experiences.addAll(experiences);
        this.experiences.forEach(x -> x.setCandidate(this));

        this.applications = Stream.of(applications).collect(Collectors.toSet());
        this.applications.forEach(x -> x.setCandidate(this));
    }

    @Override
    public String toString() {
        return "Candidate{" + "ID='" + ID + '\'' + ", lastName='" + lastName + '\'' + ", firstName='" + firstName + '\''
                + ", address='" + address + '\'' + ", telephone='" + telephone + '\'' + ", birthDate=" + birthDate
                + ", sex=" + sex + ", candidateStatus=" + candidateStatus + ", avatar=" + avatar + ", linkLinkedin='"
                + linkLinkedin + '\'' + ", linkGithub='" + linkGithub + '\'' + ", description='" + description + '\''
                + ", languages='" + languages + '\'' + '}';
    }

}
