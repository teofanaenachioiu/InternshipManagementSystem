package com.intern.Internship.model.validator;

import com.intern.Internship.model.Feedback;

public class FeedbackValidator implements Validator<Feedback> {
    /**
     * Feedback validator
     * @param entity: Feedback
     * @throws ValidationException if entity is invalid
     */
    @Override
    public void validate(Feedback entity) {
        String msg="";

        if(entity.getDescription().equals("")) msg+="Description cannot be empty!";
        if(entity.getAnonymous()==null) msg+="Your visibility needs to be specified!"; //???
        if(entity.getRating()<1 || entity.getRating()>5) msg+="Rating needs to be between 1-5!";
        if(entity.getInternship()==null) msg+="Internship has to be specified!";

        if(msg!=""){
            throw new ValidationException(msg);
        }
    }
}
