package com.intern.Internship.model.validator;

import com.intern.Internship.model.Application;

public class ApplicationValidator implements Validator<Application> {
    @Override
    public void validate(Application entity) {
        String msg="";

        if(entity.getApplicationStatus()==null) msg+="Application has to be specified!";
        if(entity.getExtraMessage().equals("")) msg+="ExtraMessage cannot be empty!";
        if(entity.getCandidate()==null) msg+="Candidate has to be specified!";
        if(entity.getInternship()==null) msg+="Internship has to be specified!";

        if(msg!=""){
            throw new ValidationException(msg);
        }
    }
}
