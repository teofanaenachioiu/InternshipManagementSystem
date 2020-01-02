package com.intern.Internship.model.validator;

import com.intern.Internship.model.Message;
import org.apache.commons.validator.routines.EmailValidator;

public class MessageValidator implements Validator<Message> {
    @Override
    public void validate(Message entity) {
        String msg = "";

        if(entity.getName().equals("")) msg+="Name cannot be empty!";
        if(!EmailValidator.getInstance().isValid(entity.getEmail())) msg+="Email is invalid!";
        if(entity.getSubject().equals("")) msg+="Subject cannot be empty!";
        String phoneNumber=entity.getPhone();
        String regex="\\d+";
        if(!phoneNumber.equals("") && (phoneNumber.length()!=10 || phoneNumber.charAt(0) != '0' || !phoneNumber.matches(regex))) msg+="Phone number is invalid!";
        if(entity.getMessage().equals("") || entity.getMessage().length()>255) msg+="Message is too long!";

        if (msg != "") {
            throw new ValidationException(msg);
        }
    }
}
