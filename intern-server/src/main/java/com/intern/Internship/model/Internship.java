package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

enum InternshipStatus {
    Open, Closed;
}

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Internship implements HasID<String> {
    /**
     *
     */
    private static final long serialVersionUID = -458767083520973395L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String name;
    private LocalDate startTime;
    private LocalDate endTime;
    private Boolean paid;
    private int nrMonths;
    private String description;
    private int nrApplicants;
    private InternshipStatus status;
    private String location;
    private LocalDate addedDate;
    @ManyToOne
    @JoinColumn
    private Company company;
    private AreaOfInterest areaOfInterest;
    @OneToMany(mappedBy = "internship", cascade = CascadeType.ALL)
    private Set<Feedback> feedbacks;

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

    @Override
    public String toString() {
        return "Internship{" + "ID='" + ID + '\'' + ", name='" + name + '\'' + ", startTime=" + startTime + ", endTime="
                + endTime + ", paid=" + paid + ", nrMonths=" + nrMonths + ", description='" + description + '\''
                + ", nrApplicants=" + nrApplicants + ", status=" + status + ", location='" + location + '\''
                + ", addedDate=" + addedDate + ", employer=" + company.getID() + ", areaOfInterest="
                + areaOfInterest.getID() + '}';
    }
}