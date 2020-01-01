package com.intern.Internship.model.validator;

import com.intern.Internship.model.Company;

public class CompanyValidator implements Validator<Company> {
    /**
     * Company validator
     * @param entity: Company
     * @throws ValidationException if entity is invalid
     */
    @Override
    public void validate(Company entity) {
        String msg = "";

        if (entity.getID().equals(""))
            msg += "Email cannot be empty!";
        if (entity.getName().equals(""))
            msg += "Name cannot be empty!";
        if (entity.getAddress().equals(""))
            msg += "Address cannot be empty!";
        if (entity.getTelephone().equals(""))
            msg += "Telephone cannot be empty!";
        if (entity.getDescription().equals(""))
            msg += "Description cannot be empty!";
        if (entity.getField().equals(""))
            msg += "Field cannot be empty!";
        if (entity.getLogo() == null)
            msg += "Insert a logo!";

        if (msg != "") {
            throw new ValidationException(msg);
        }
    }
}
