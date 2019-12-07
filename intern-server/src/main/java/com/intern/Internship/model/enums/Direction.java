package com.intern.Internship.model.enums;

public enum Direction {

    ASC("ASC"), DESC("DESC");

    private final String directionCode;

    private Direction(String direction) {

        this.directionCode = direction;

    }

    public String getDirectionCode() {

        return this.directionCode;

    }

}