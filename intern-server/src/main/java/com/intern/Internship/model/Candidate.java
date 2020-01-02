package com.intern.Internship.model;

import com.intern.Internship.model.enums.CandidateStatus;
import com.intern.Internship.model.enums.Sex;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
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
    @ToString.Exclude
    private Set<Application> applications;
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    @ToString.Exclude
    private Set<Studies> studies;
    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    @ToString.Exclude
    private Set<Experience> experiences;

    /**
     * Candidate constructor
     * 
     * @param ID:              String
     * @param lastName:        String, numele de familie
     * @param firstName:       String, prenumele
     * @param address:         String
     * @param telephone:       String
     * @param birthDate:       LocalDate
     * @param sex:             Sex, may be M or F
     * @param candidateStatus: CandidateStatus, may be Open, Pending or Uninterested
     * @param avatar:          Blob
     * @param linkLinkedin:    String
     * @param linkGithub:      String
     * @param description:     String
     * @param languages:       String
     * @param studies:         Set<Studies>
     * @param experiences:     Set<Experience>
     * @param applications:    Application...
     */
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

}
