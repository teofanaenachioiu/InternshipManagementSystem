package com.intern.Internship.service;

import com.intern.Internship.model.AreaOfInterest;

import java.util.List;

public interface AreaOfInterestService {
    List<String> findAll();
    List<AreaOfInterest> findAll(List<String> names);

    List<String> findAll(String email);
}
