package com.intern.Internship.model.validator;

import com.intern.Internship.model.AreaOfInterest;

public class AreaOfInterestValidator implements Validator<AreaOfInterest> {
    /**
     * AreaOfInterest validator
     * @param entity: AreaOfInterest
     * @throws ValidationException if entity is invalid
     */
    @Override
    public void validate(AreaOfInterest entity) {
        String msg="";

        if(entity.getName().equals("")) msg+="Name cannot be empty!";
        if(entity.getTagType().equals("")) msg+="Tag type cannot be empty!";

        if(msg!=""){
            throw new ValidationException(msg);
        }
    }
}
