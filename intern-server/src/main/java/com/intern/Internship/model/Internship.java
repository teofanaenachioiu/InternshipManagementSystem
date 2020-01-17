package com.intern.Internship.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.intern.Internship.model.enums.InternshipStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class Internship implements HasID<String> {
    private static final long serialVersionUID = -458767083520973395L;

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String ID;

    private String name;
    private LocalDate startTime;
    private LocalDate endTime;
    private Boolean paid;
    private int nrMonths;
    @Column(length = 5000)
    private String description;
    private int nrApplicants;
    private InternshipStatus status;
    private String location;
    private LocalDate addedDate;
    @ManyToOne
    @JoinColumn
    @ToString.Exclude
    @JsonIdentityInfo(generator = ObjectIdGenerators.StringIdGenerator.class, property = "@ID")
    private Company company;
    @Lob
    @Column(name = "logo", columnDefinition = "BLOB")
    private byte[] logo;
    @ManyToOne
    @JoinColumn
    private AreaOfInterest areaOfInterest;
    @ToString.Exclude
    @OneToMany(mappedBy = "internship", cascade = CascadeType.ALL)
    private Set<Feedback> feedbacks;

    /**
     * Internship constructor
     * 
     * @param name:           String
     * @param startTime:      LocalDate
     * @param endTime:        LocalDate
     * @param paid:           Boolean
     * @param nrMonths:       int
     * @param description:    String
     * @param nrApplicants:   int
     * @param status:         InternshipStatus, can be Open or Closed
     * @param location:       String
     * @param addedDate:      LocalDate
     * @param company:        Company
     * @param areaOfInterest: AreaOfInterest
     * @param feedbacks:      Feedback...
     */
    public Internship(String name, LocalDate startTime, LocalDate endTime, Boolean paid, int nrMonths,
            String description, int nrApplicants, InternshipStatus status, String location, LocalDate addedDate,
            Company company, AreaOfInterest areaOfInterest, Feedback... feedbacks) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.paid = paid;
        this.nrMonths = nrMonths;
        this.description = description;
        this.nrApplicants = nrApplicants;
        this.status = status;
        this.location = location;
        this.addedDate = addedDate;
        this.company = company;
        this.areaOfInterest = areaOfInterest;
        this.feedbacks = Stream.of(feedbacks).collect(Collectors.toSet());
        this.feedbacks.forEach(x -> x.setInternship(this));
    }
}
