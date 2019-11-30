package com.intern.Internship.model.validator;

import com.intern.Internship.model.Experience;

public class ExperienceValidator implements Validator<Experience> {

    @Override
    public void validate(Experience entity){
        String msg="";

        if(entity.getCompanyName().equals(""))
            msg+="Company name cannot be empty!";
        if(entity.getStartDate()==null)
            msg+="Start date cannot be empty!";
        if(entity.getEndDate()==null)
            msg+="End date cannot be empty!";
        if(entity.getJobName().equals(""))
            msg+="Job name cannot be empty!";

        if(msg!="")
            throw new ValidationException(msg);
    }
}
