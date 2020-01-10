package com.intern.Internship.model.dto;

import com.intern.Internship.model.enums.ApplicationStatus;
import com.intern.Internship.model.enums.InternshipStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Map;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ApplicationDTO {
    private String id;
    private String idCandidate;
    private String idInternship;
    private String idCompany;
    private String nameCompany;
    private String extraMessage;
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
    private ApplicationStatus applicationStatus;

    private Set<FeedbackDTO> feedbacks;

    public ApplicationDTO(String id,String idCandidate, String idInternship, String extraMessage) {
        this.id=id;
        this.idCandidate = idCandidate;
        this.idInternship = idInternship;
        this.extraMessage = extraMessage;
    }

    public ApplicationDTO(Map<String,?> map) {
        this.id = (String) map.get("id");
        this.idCandidate = (String) map.get("candidateId");
        this.idInternship = (String) map.get("internshipId");
        this.idCompany = (String) map.get("companyId");
        this.nameCompany = (String) map.get("companyName");
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
        this.extraMessage = (String) map.get("extraMessage");
        this.applicationStatus = (ApplicationStatus) map.get("applicationStatus");
    }
}
