package com.intern.Internship.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class FeedbackDTO {
    private String ID;

    private String description;
    private Boolean anonymous;
    private int rating;
    private String internshipId;
}
