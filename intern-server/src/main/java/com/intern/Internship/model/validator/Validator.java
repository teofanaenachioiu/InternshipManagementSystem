package com.intern.Internship.model.validator;

public interface Validator<E> {
    void validate(E entity);
}
