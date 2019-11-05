package com.intern.Internship.model.validator;

public class ValidationException extends RuntimeException {
    public ValidationException(String message) {
        super(message);
    }
}
