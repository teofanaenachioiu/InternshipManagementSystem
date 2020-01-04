package com.intern.Internship.model.dto;

import com.intern.Internship.model.Feedback;
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

    public FeedbackDTO(Feedback feedback) {
        this.anonymous=feedback.getAnonymous();
        this.description=feedback.getDescription();
        this.rating=feedback.getRating();
        this.ID=feedback.getID();
        this.internshipId=feedback.getInternship().getID();
    }
}
