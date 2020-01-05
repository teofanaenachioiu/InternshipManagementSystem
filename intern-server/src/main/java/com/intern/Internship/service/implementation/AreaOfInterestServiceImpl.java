package com.intern.Internship.service.implementation;

import java.util.ArrayList;
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
    public List<String> findAll() {
        List<AreaOfInterest> areasOfInterest = areaOfInterestRepository.findAll();
        List<String> result = new ArrayList<>();
        for (AreaOfInterest areaOfInterest : areasOfInterest) {
            result.add(areaOfInterest.getName());
        }
        return result;
    }

    @Override
    public List<AreaOfInterest> findAll(List<String> names) {
        return areaOfInterestRepository.findAll(AreaOfInterestRepository.multiLikeName(names));
    }
}
