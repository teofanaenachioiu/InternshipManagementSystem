package com.intern.Internship.model.dto;

import java.util.List;

public class PageDTO<T> {
    private Boolean hasNext;
    private Boolean hasPrevious;
    private int nbPages;
    private List<T> content;

    public PageDTO() {

    }

    public Boolean getHasNext() {
        return hasNext;
    }

    public Boolean getHasPrevious() {
        return hasPrevious;
    }

    public void setHasPrevious(Boolean hasPrevious) {
        this.hasPrevious = hasPrevious;
    }

    public int getNbPages() {
        return nbPages;
    }

    public void setNbPages(int nbPages) {
        this.nbPages = nbPages;
    }

    public List<T> getContent() {
        return content;
    }

    public void setContent(List<T> content) {
        this.content = content;
    }

    public void setHasNext(Boolean hasNext) {
        this.hasNext = hasNext;
    }
}
