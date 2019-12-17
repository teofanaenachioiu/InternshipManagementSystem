package com.intern.Internship.service.implementation;

import java.util.List;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.repository.AreaOfInterestRepository;
import com.intern.Internship.service.AreaOfInterestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AreaOfInterestServiceImpl implements AreaOfInterestService {

    @Autowired
    AreaOfInterestRepository areaOfInterestRepository;

    @Override
    public List<AreaOfInterest> findAll(List<String> names) {
        List<AreaOfInterest> list = areaOfInterestRepository.findAll(AreaOfInterestRepository.multiLikeName(names));
        return list;
    }
}
