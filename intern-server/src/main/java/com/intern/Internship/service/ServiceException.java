package com.intern.Internship.service;

public class ServiceException extends RuntimeException{

    private static final long serialVersionUID= 560245223454729812L;

    public ServiceException(String message) {
        super(message);
    }

}