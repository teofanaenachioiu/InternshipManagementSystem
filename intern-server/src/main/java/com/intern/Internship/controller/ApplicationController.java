package com.intern.Internship.controller;

import com.intern.Internship.model.Application;
import com.intern.Internship.model.dto.ApplicationDTO;
import com.intern.Internship.model.dto.ApplicationRequest;
import com.intern.Internship.model.dto.InternshipCandidateDTO;
import com.intern.Internship.model.enums.ApplicationStatus;
import com.intern.Internship.service.ApplicationService;
import com.intern.Internship.service.CandidateService;
import com.intern.Internship.service.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/secure/application")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @Autowired
    private InternshipService internshipService;

    @Autowired
    private CandidateService candidateService;

    @PostMapping()
    public ResponseEntity<ApplicationDTO> save(@RequestBody ApplicationRequest applicationDTO) {
        try {
            Application application =new Application(ApplicationStatus.Applied,
                    applicationDTO.getExtraMessage(),
                    internshipService.findById(applicationDTO.getIdInternship()),
                    candidateService.findByEmail(applicationDTO.getIdCandidate()));

            Application result = applicationService.save(application);
            ApplicationDTO resultDTO= new ApplicationDTO(
                    result.getID(),
                    result.getCandidate().getID(),
                    result.getInternship().getID(),
                    result.getExtraMessage());
            return ResponseEntity.ok().body(resultDTO);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ApplicationDTO());
        }
    }

    @PutMapping()
    public ResponseEntity<Application> update(@RequestParam("candidate_email") String candidateID, @RequestParam("internship_id") String internshipID, @RequestParam("status") ApplicationStatus applicationStatus) {
        try {
            Application application = applicationService.update(candidateID, internshipID, applicationStatus);
            return ResponseEntity.ok().body(application);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new Application());
        }
    }

    @GetMapping
    public ResponseEntity<List<ApplicationDTO>> findApplicationByCandidate(@RequestParam("username") String username) {
        try {
            List<ApplicationDTO> internships = applicationService.getApplicationsByUsername(username);
            return ResponseEntity.ok().body(internships);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ArrayList<>());
        }
    }

    @GetMapping("/CandidateInternship")
    public ResponseEntity<Application> findApplicationByCandidateInternship(@RequestParam("candidate_email") String candidateID, @RequestParam("internship_id") String internshipID) {
        Application application = applicationService.findApplicationByCandidateInternship(candidateID, internshipID);
        if (application != null) return ResponseEntity.ok().body(application);
        else return ResponseEntity.badRequest().body(new Application());
    }

    @GetMapping("/InternshipCandidates")
    public ResponseEntity<List<InternshipCandidateDTO>> findAllCandidatesInternship(@RequestParam("internship_id") String internship_id) {
        List<InternshipCandidateDTO> internshipCandidateDTOList = applicationService.findAllCandidatesInternship(internship_id);
        if (internshipCandidateDTOList.size() != 0) return ResponseEntity.ok().body(internshipCandidateDTOList);
        else return ResponseEntity.badRequest().body(new ArrayList<>());
    }
}
