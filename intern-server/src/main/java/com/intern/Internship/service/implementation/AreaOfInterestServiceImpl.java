package com.intern.Internship.service.implementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.intern.Internship.model.*;
import com.intern.Internship.repository.*;
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
    CompanyAreaOfInterestRepository companyAreaOfInterestRepository;

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
        if(candidate.isPresent()){
            System.out.println(areaOfInterestRepository.getAllByEmail(email));
            return areaOfInterestRepository.getAllByEmail(email);
        }
        if(company.isPresent()){
            System.out.println(areaOfInterestRepository.getAllByEmailCompany(email));
            return areaOfInterestRepository.getAllByEmailCompany(email);
        }
        throw new EntityNotFoundException();
    }

    @Override
    public void update(String email, List<String> areaOfInterests) {
        Optional<Candidate> candidate = candidateRepository.findById(email);
        Optional<Company> company = companyRepository.findById(email);
        if (!candidate.isPresent() && !company.isPresent())
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
            if(candidate.isPresent()){
                CandidateAreaOfInterest candidateAreaOfInterest = new CandidateAreaOfInterest(candidate.get(),areaOfInterest);
                candidateAreaOfInterestRepository.save(candidateAreaOfInterest);
            }
            else{
                CompanyAreaOfInterest companyAreaOfInterest = new CompanyAreaOfInterest(company.get(),areaOfInterest);
                companyAreaOfInterestRepository.save(companyAreaOfInterest);
            }
        }
    }
}
