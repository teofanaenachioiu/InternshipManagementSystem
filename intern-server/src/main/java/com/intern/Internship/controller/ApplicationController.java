package com.intern.Internship.controller;

import com.intern.Internship.model.Application;
import com.intern.Internship.model.dto.ApplicationDTO;
import com.intern.Internship.model.dto.ApplicationRequest;
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
@RequestMapping(value = "/api/application")
@CrossOrigin(origins = "http://localhost:4200")
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
    @GetMapping
    public ResponseEntity<List<ApplicationDTO>> findApplicationByCandidate(@RequestParam("username") String username) {

        try {
            List<ApplicationDTO> internships = applicationService.getApplicationsByUsername(username);
            return ResponseEntity.ok().body(internships);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ArrayList<ApplicationDTO>());
        }
    }
}
