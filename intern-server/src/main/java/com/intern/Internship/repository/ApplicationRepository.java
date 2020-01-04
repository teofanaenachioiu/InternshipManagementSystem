package com.intern.Internship.repository;

import com.intern.Internship.model.Application;
import com.intern.Internship.model.Internship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface ApplicationRepository extends JpaRepository<Application,String> {
    @Query("select i.ID as idInternship ,"
            + "a.ID as id,"
            + "a.applicationStatus  as applicationStatus,"
            + "a.extraMessage as extraMessage,"
            + "a.candidate.ID as candidateId,"
            + "a.internship.ID as internshipId,"
            + " i.name as name," + " i.startTime as startTime," + "i.endTime as endTime,"
            + "i.paid as paid," + "i.nrMonths as nrMonths," + "i.description as description,"
            + "i.nrApplicants as nrApplicants," + "i.status as status," + "i.location as location,"
            + "i.addedDate as addedDate,"
            + "i.company.name as companyName,"
            + "i.company.id as companyId,"
            + "i.areaOfInterest.id as areaOfInterest"
            + " from Internship i,Application a WHERE a.internship.ID like i.ID and a.candidate.ID=?1 ")
    List<Map<String, ?>> findAllByUsername(String username);
}
