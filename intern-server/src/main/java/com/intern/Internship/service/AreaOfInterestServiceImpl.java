package com.intern.Internship.service;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.repository.AreaOfInterestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AreaOfInterestServiceImpl implements AreaOfInterestService {

    @Autowired
    AreaOfInterestRepository areaOfInterestRepository;

    @Override
    public List<AreaOfInterest> findAll(List<String> names) {
        List<AreaOfInterest> list =areaOfInterestRepository.findAll(AreaOfInterestRepository.multiLikeName(names));
        return list;
    }
}
