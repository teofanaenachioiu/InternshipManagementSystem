package com.intern.Internship.model.validator;

import com.intern.Internship.model.Internship;

public class InternshipValidator implements Validator<Internship> {
    @Override
    public void validate(Internship entity) {
        String msg="";

        if(entity.getName().equals("")) msg+="Name cannot be empty!";
        if(entity.getStartTime()==null) msg+="Start time has to be specified!";
        if(entity.getEndTime()==null) msg+="End time has to be specified!";
        if(entity.getPaid()==null) msg+="You need to specify if the internship is paid or not!";
        if(entity.getNrMonths()<0) msg+="The number of months has to be >0!";
        if(entity.getDescription().equals("")) msg+="Description cannot be empty!";
        if(entity.getNrApplicants()<0) msg+="The number of applicants has to be >=0!";
        if(entity.getStatus()==null) msg+="Status has to be specified!";
        if(entity.getLocation().equals("")) msg+="Location has to be specified!";
        if(entity.getAddedDate()==null) msg+="The added date has to be specified!";
        if(entity.getCompany()==null) msg+="Company has to be specified!";
        if(entity.getAreaOfInterest()==null) msg+="Area of interest has to be specified!";

        if(msg!=""){
            throw new ValidationException(msg);
        }
    }
}
