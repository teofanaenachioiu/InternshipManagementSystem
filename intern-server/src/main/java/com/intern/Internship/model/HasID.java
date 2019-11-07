package com.intern.Internship.model;

import java.io.Serializable;

public interface HasID<ID> extends Serializable {
    ID getID();
    void setID(ID id);
}
