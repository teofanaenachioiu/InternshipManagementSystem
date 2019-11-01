package com.intern.Internship.model.validator;

import com.intern.Internship.model.Employer;

public class EmployerValidator implements Validator<Employer> {
    @Override
    public void validate(Employer entity) {
        String msg="";

        if(entity.getID().equals("")) msg+="Email cannot be empty!";
        if(entity.getName().equals("")) msg+="Name cannot be empty!";
        if(entity.getAddress().equals("")) msg+="Address cannot be empty!";
        if(entity.getTelephone().equals("")) msg+="Telephone cannot be empty!";
        if(entity.getDescription().equals("")) msg+="Description cannot be empty!";
        if(entity.getLogo()==null) msg+="Insert a logo!";
        if(entity.getPassword().equals("")) msg+="Password cannot be empty!";

        if(msg!=""){
            throw new ValidationException(msg);
        }
    }
}
