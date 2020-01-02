package com.intern.Internship.model.validator;

public class ValidationException extends RuntimeException {
    private static final long serialVersionUID = 907245251654729812L;

    /**
     * ValidationException constructor
     * @param message: String
     */
    public ValidationException(String message) {
        super(message);
    }
}
