package com.intern.Internship.model.enums;

import java.util.function.Predicate;

public enum OrderBy {

    ADDEDDATE("addedDate"), AVGFEEDBACK("averageOfFeedbacks"), NBFFEEDBACK("numberOfFeedbacks");

    private String OrderByCode;

    private OrderBy(String orderBy) {

        this.OrderByCode = orderBy;

    }

    public String getOrderByCode() {

        return this.OrderByCode;

    }

    public static boolean validate(String orderBy) {
        Predicate<String> predicate = (order) -> {
            return !(order.equals(OrderBy.ADDEDDATE.getOrderByCode())
                    || order.equals(OrderBy.AVGFEEDBACK.getOrderByCode())
                    || order.equals(OrderBy.NBFFEEDBACK.getOrderByCode()));
        };
        return predicate.test(orderBy);
    }
}