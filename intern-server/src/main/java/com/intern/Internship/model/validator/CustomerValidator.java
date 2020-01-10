package com.intern.Internship.model.validator;

import com.intern.Internship.model.Customer;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.stereotype.Component;

@Component
public class CustomerValidator implements Validator<Customer> {
    /**
     * Customer validator
     * 
     * @param entity: Customer
     * @throws ValidationException if entity is invalid
     */

    @Override
    public void validate(Customer entity) {
        String msg = "";

        if (!EmailValidator.getInstance().isValid(entity.getUsername()))
            msg += "Email is invalid!";
        if (entity.getPassword().length() < 6 || entity.getPassword().length() > 24)
            msg += "Password is invalid!";

        if (msg != "") {
            throw new ValidationException(msg);
        }
    }
}