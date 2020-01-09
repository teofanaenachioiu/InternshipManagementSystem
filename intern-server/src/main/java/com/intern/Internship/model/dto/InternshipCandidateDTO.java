package com.intern.Internship.model.dto;

import com.intern.Internship.model.enums.ApplicationStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class InternshipCandidateDTO {
    String email;
    String name;
    ApplicationStatus status;

    public InternshipCandidateDTO(String email, String name, ApplicationStatus status) {
        this.email = email;
        this.name = name;
        this.status = status;
    }
}
