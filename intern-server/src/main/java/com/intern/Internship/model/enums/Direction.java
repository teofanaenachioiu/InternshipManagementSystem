package com.intern.Internship.model.enums;

import java.util.function.Predicate;

public enum Direction {

    ASC("ASC"), DESC("DESC");

    private final String directionCode;

    private Direction(String direction) {

        this.directionCode = direction;

    }

    public String getDirectionCode() {

        return this.directionCode;

    }

    public static boolean validate(String direction) {
        Predicate<String> predicate = (dir) -> {
            return !(dir.equals(Direction.ASC.getDirectionCode()) 
                    || dir.equals(Direction.DESC.getDirectionCode()));
        };
        return predicate.test(direction);
    }

}