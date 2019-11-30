package com.intern.Internship.model.validator;

import com.intern.Internship.model.Studies;

public class StudiesValidator implements Validator<Studies> {

    @Override
    public void validate(Studies entity){
        String msg="";

        if (entity.getNameOfInstitution().equals(""))
            msg+="The name of institution cannot be empty!";
        if(entity.getProfile().equals(""))
            msg+="Your profile cannot be empty!";
        if(entity.getStartDate()==null)
            msg+="The start date has to be specified!";
        if(entity.getEndDate()==null)
            msg+="The end date has to be specified!";

        if(msg!="")
            throw new ValidationException(msg);

    }
}
