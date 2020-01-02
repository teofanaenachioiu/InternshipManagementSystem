package com.intern.Internship.model.dto;

import java.time.LocalDate;
import java.util.Map;

import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.enums.InternshipStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class InternshipDTO {
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
    private String company;
    private String areaOfInterest;
    private Long numberOfFeedbacks;
    private Double averageOfFeedbacks;

    /**
     * InternshipDTO constructor
     * @param name: String
     * @param startTime: LocalDate
     * @param endTime: LocalDate
     * @param paid: Boolean
     * @param nrMonths: int
     * @param description: String
     * @param nrApplicants: int
     * @param status: InternshipStatus, can be Open or Closed
     * @param location: String
     * @param addedDate: LocalDate
     * @param company: String
     * @param areaOfInterest: String
     * @param numberOfFeedbacks: Long
     * @param averageOfFeedbacks: Double
     */
    public InternshipDTO(String name, LocalDate startTime, LocalDate endTime, Boolean paid, int nrMonths,
            String description, int nrApplicants, InternshipStatus status, String location, LocalDate addedDate,
            String company, String areaOfInterest, Long numberOfFeedbacks, Double averageOfFeedbacks) {
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
        this.averageOfFeedbacks = averageOfFeedbacks;
        this.numberOfFeedbacks = numberOfFeedbacks;
    }

    /**
     * InternshipDTO constructor
     * @param internship: Internship
     * Creates InternshipDTO from Internship data
     */
    public InternshipDTO(Internship internship) {
        this.ID = internship.getID();
        this.name = internship.getName();
        this.startTime = internship.getStartTime();
        this.endTime = internship.getEndTime();
        this.paid = internship.getPaid();
        this.nrMonths = internship.getNrMonths();
        this.description = internship.getDescription();
        this.nrApplicants = internship.getNrApplicants();
        this.status = internship.getStatus();
        this.location = internship.getLocation();
        this.addedDate = internship.getAddedDate();
        if (internship.getCompany() == null) {
            this.company = null;
        } else {
            this.company = internship.getCompany().getName();
        }
        if (internship.getAreaOfInterest() == null) {
            this.areaOfInterest = null;
        } else {
            this.areaOfInterest = internship.getAreaOfInterest().getName();
        }
        if (internship.getFeedbacks() == null) {
            this.averageOfFeedbacks = 0.0;
            this.numberOfFeedbacks = 0l;
        } else {
            this.averageOfFeedbacks = (internship.getFeedbacks().stream().mapToDouble(Feedback::getRating).sum())
                    / internship.getFeedbacks().size();
            this.numberOfFeedbacks = Long.valueOf(internship.getFeedbacks().size());
        }
    }

    /**
     * InternshipDTO constructor
     * @param map: Map
     * Creates InternshipDTO from Internship represented as Map
     */
    public InternshipDTO(Map<String, ?> map) {
        this.ID = (String) map.get("id");
        this.name = (String) map.get("name");
        this.startTime = (LocalDate) map.get("startTime");
        this.endTime = (LocalDate) map.get("endTime");
        this.paid = (Boolean) map.get("paid");
        this.nrMonths = (Integer) map.get("nrMonths");
        this.description = (String) map.get("description");
        this.nrApplicants = (Integer) map.get("nrApplicants");
        this.status = (InternshipStatus) map.get("status");
        this.location = (String) map.get("location");
        this.addedDate = (LocalDate) map.get("addedDate");
        this.company = (String) map.get("company");
        this.areaOfInterest = (String) map.get("areaOfInterest");
        this.averageOfFeedbacks = (Double) map.get("averageOfFeedbacks");
        this.numberOfFeedbacks = (Long) map.get("numberOfFeedbacks");

    }

}
