package com.intern.Internship.service.implementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Candidate;
import com.intern.Internship.model.CandidateAreaOfInterest;
import com.intern.Internship.model.Company;
import com.intern.Internship.repository.AreaOfInterestRepository;
import com.intern.Internship.repository.CandidateAreaOfInterestRepository;
import com.intern.Internship.repository.CandidateRepository;
import com.intern.Internship.repository.CompanyRepository;
import com.intern.Internship.service.AreaOfInterestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
public class AreaOfInterestServiceImpl implements AreaOfInterestService {
    @Autowired
    AreaOfInterestRepository areaOfInterestRepository;

    @Autowired
    CandidateAreaOfInterestRepository candidateAreaOfInterestRepository;

    @Autowired
    CandidateRepository candidateRepository;

    @Autowired
    CompanyRepository companyRepository;

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

    @Override
    public List<String> findAll(String email) {
        Optional<Candidate> candidate = candidateRepository.findById(email);
        Optional<Company> company = companyRepository.findById(email);
        if (!candidate.isPresent() && !company.isPresent())
            throw new EntityNotFoundException();
        return areaOfInterestRepository.getAllByEmail(email);
    }

    @Override
    public void update(String email, List<String> areaOfInterests) {
        Optional<Candidate> candidate = candidateRepository.findById(email);
        if (!candidate.isPresent())
            throw new EntityNotFoundException();

        List<String> currentAreaOfInterestDeleted = this.findAll(email);
        List<String> currentAreaOfInterestAll = this.findAll(email);
        currentAreaOfInterestDeleted.removeAll(areaOfInterests);//deleted
        areaOfInterests.removeAll(currentAreaOfInterestAll); //added
        for(String name: currentAreaOfInterestDeleted){
            AreaOfInterest areaOfInterest =areaOfInterestRepository.findByName(name);
            candidateAreaOfInterestRepository.deleteByIdAreaOfInterest(areaOfInterest.getID());
        }
        for(String name:areaOfInterests){
            AreaOfInterest areaOfInterest =areaOfInterestRepository.findByName(name);
            if(areaOfInterest == null) {
                areaOfInterest = new AreaOfInterest(name);
                areaOfInterest =areaOfInterestRepository.save(areaOfInterest);
            }
            CandidateAreaOfInterest candidateAreaOfInterest =new CandidateAreaOfInterest(candidate.get(),areaOfInterest);
            candidateAreaOfInterestRepository.save(candidateAreaOfInterest);
        }
    }
}
