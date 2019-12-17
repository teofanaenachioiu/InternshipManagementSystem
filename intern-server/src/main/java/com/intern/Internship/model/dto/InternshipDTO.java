package com.intern.Internship.model.dto;

import java.time.LocalDate;
import java.util.Map;

import com.intern.Internship.model.Feedback;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.enums.InternshipStatus.InternshipStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
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
        this.company = internship.getCompany().getName();
        this.areaOfInterest = internship.getAreaOfInterest().getName();
        this.averageOfFeedbacks = (internship.getFeedbacks().stream().mapToDouble(Feedback::getRating).sum())
                / internship.getFeedbacks().size();
        this.numberOfFeedbacks = Long.valueOf(internship.getFeedbacks().size());
    }

    public InternshipDTO(Map<String, ?> map) {
        this.ID = (String) map.get("id");
        this.name = (String) map.get("name");
        this.startTime = (LocalDate) map.get("startTime");
        this.endTime = (LocalDate) map.get("endTime");
        this.paid = (Boolean) map.get("paid");
        this.nrMonths = (int) map.get("nrMonths");
        this.description = (String) map.get("description");
        this.nrApplicants = (int) map.get("nrApplicants");
        this.status = (InternshipStatus) map.get("status");
        this.location = (String) map.get("location");
        this.addedDate = (LocalDate) map.get("addedDate");
        this.company = (String) map.get("company");
        this.areaOfInterest = (String) map.get("areaOfInterest");
        this.averageOfFeedbacks = (Double) map.get("averageOfFeedbacks");
        this.numberOfFeedbacks = (Long) map.get("numberOfFeedbacks");

    }

    @Override
    public String toString() {
        return "InternshipDTO{" + "ID='" + ID + '\'' + ", name='" + name + '\'' + ", startTime=" + startTime
                + ", endTime=" + endTime + ", paid=" + paid + ", nrMonths=" + nrMonths + ", description='" + description
                + '\'' + ", nrApplicants=" + nrApplicants + ", status=" + status + ", location='" + location + '\''
                + ", addedDate=" + addedDate + ", company='" + company + '\'' + ", areaOfInterest='" + areaOfInterest
                + '\'' + ", numberOfFeedbacks=" + numberOfFeedbacks + ", averageOfFeedbacks=" + averageOfFeedbacks
                + '}';
    }
}
