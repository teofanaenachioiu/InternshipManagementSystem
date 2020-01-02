package com.intern.Internship.model.validator;

import com.intern.Internship.model.dto.InternshipDTO;

public class InternshipDTOValidator implements Validator<InternshipDTO> {
    /**
     * InternshipDTO validator
     * @param entity: InternshipDTO
     * @throws ValidationException if entity is invalid
     */
    @Override
    public void validate(InternshipDTO entity) {
        String msg="";

        if(entity.getName().equals("")) msg+="Name cannot be empty!";
        if(entity.getStartTime()==null) msg+="Start time has to be specified!";
        if(entity.getEndTime()==null) msg+="End time has to be specified!";
        if(entity.getPaid()==null) msg+="You need to specify if the internship is paid or not!";
        if(entity.getNrMonths()<0) msg+="The number of months has to be >0!";
        if(entity.getDescription().equals("")) msg+="Description cannot be empty!";
        if(entity.getDescription().length()>255) msg+="Description is too long!";
        if(entity.getStatus()==null) msg+="Status has to be specified!";
        if(entity.getLocation().equals("")) msg+="Location has to be specified!";
        if(entity.getLocation().length()>255) msg+="Location is too long!";
        if(entity.getAddedDate()==null) msg+="The added date has to be specified!";

        if(msg!=""){
            throw new ValidationException(msg);
        }
    }
}
