package com.intern.Internship.service.implementation;

import com.intern.Internship.model.Application;
import com.intern.Internship.repository.ApplicationRepository;
import com.intern.Internship.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    ApplicationRepository applicationRepository;

    @Override
    public Application save(Application application) {
        if (application == null)
            throw new IllegalArgumentException();
        return applicationRepository.save(application);
    }
}
