package com.intern.Internship.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ApplicationRequest {
    private String idCandidate;
    private String idInternship;
    private String extraMessage;

    public ApplicationRequest(String idCandidate, String idInternship, String extraMessage) {
        this.idCandidate = idCandidate;
        this.idInternship = idInternship;
        this.extraMessage = extraMessage;
    }
}
