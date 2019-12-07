package com.intern.Internship.model.enums;

public enum OrderBy {

    ADDEDDATE("addedDate"),
    AVGFEEDBACK("averageOfFeedbacks"),
    NBFFEEDBACK("numberOfFeedbacks");

    private String OrderByCode;

    private OrderBy(String orderBy) {

        this.OrderByCode = orderBy;

    }

    public String getOrderByCode() {

        return this.OrderByCode;

    }

}