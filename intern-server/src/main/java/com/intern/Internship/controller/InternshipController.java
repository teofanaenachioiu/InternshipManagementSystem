package com.intern.Internship.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;
import com.intern.Internship.model.enums.Direction;
import com.intern.Internship.model.enums.OrderBy;
import com.intern.Internship.model.validator.ValidationException;
import com.intern.Internship.service.AreaOfInterestService;
import com.intern.Internship.service.InternshipService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/internship")
public class InternshipController {
    @Autowired
    private InternshipService internshipService;

    @Autowired
    private AreaOfInterestService areaOfInterestService;

    @GetMapping("/areaofinterest")
    public ResponseEntity<PageDTO<InternshipDTO>> findInternshipByAreaOfInterest(@RequestParam("filter") String filter,
            @RequestParam("orderBy") String orderBy, @RequestParam("direction") String direction,
            @RequestParam("page") int page, @RequestParam("size") int size) {

        List<String> listFilters = Arrays.asList(filter.split(","));
        if (Direction.validate(direction) || OrderBy.validate(orderBy)) {
            return ResponseEntity.badRequest().body(new PageDTO<InternshipDTO>());
        }

        List<AreaOfInterest> areasOfInterest = areaOfInterestService.findAll(listFilters);

        PageDTO<InternshipDTO> pageInternship = internshipService.getInternships(page, size, areasOfInterest, orderBy,
                direction);
        return ResponseEntity.ok().body(pageInternship);
    }

    @GetMapping("/company")
    public ResponseEntity<PageDTO<InternshipDTO>> findInternshipsByCompanyPaginated(
            @RequestParam("company") String companyName, @RequestParam("page") int page,
            @RequestParam("size") int size) {

        try {
            PageDTO<InternshipDTO> pageInternship = internshipService.getInternshipsByCompanyPaginated(page, size,
                    companyName);
            return ResponseEntity.ok().body(pageInternship);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new PageDTO<InternshipDTO>());
        }
    }

    @GetMapping("/company/all")
    public ResponseEntity<List<InternshipDTO>> findInternshipsByCompany(@RequestParam("company") String companyName) {

        try {
            List<InternshipDTO> pageInternship = internshipService.getInternshipsByCompany(companyName);
            return ResponseEntity.ok().body(pageInternship);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ArrayList<InternshipDTO>());
        }
    }

    @GetMapping("/candidate")
    public ResponseEntity<PageDTO<InternshipDTO>> findInternshipsByCandidate(
            @RequestParam("candidate") String candidateId, @RequestParam("page") int page,
            @RequestParam("size") int size) {

        try {
            PageDTO<InternshipDTO> pageInternship = internshipService.getInternshipsByCandidate(page, size,
                    candidateId);
            return ResponseEntity.ok().body(pageInternship);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new PageDTO<InternshipDTO>());
        }
    }

    @DeleteMapping()
    public ResponseEntity<InternshipDTO> delete(@RequestParam("id") String internshipId) {
        Internship internship = internshipService.findById(internshipId);
        if (internship == null) {
            return ResponseEntity.badRequest().body(new InternshipDTO());
        }
        internshipService.delete(internship);

        return ResponseEntity.ok().body(new InternshipDTO(internship));
    }

    @PostMapping()
    public ResponseEntity<InternshipDTO> save(@RequestBody InternshipDTO internshipDTO) {
        if (internshipDTO == null) {
            return ResponseEntity.badRequest().body(new InternshipDTO());
        }
        try {
            Internship internship = internshipService.save(internshipDTO);
            if (internship == null) {
                return ResponseEntity.badRequest().body(new InternshipDTO());
            }

            return ResponseEntity.ok().body(new InternshipDTO(internship));
        } catch (ValidationException ex) {
            return ResponseEntity.badRequest().body(new InternshipDTO());
        }
    }

    @PutMapping()
    public ResponseEntity<InternshipDTO> update(@RequestBody InternshipDTO internshipDTO) {
        if (internshipDTO == null) {
            return ResponseEntity.badRequest().body(new InternshipDTO());
        }

        try {
            Internship internship = internshipService.update(internshipDTO);
            if (internship == null) {
                return ResponseEntity.badRequest().body(new InternshipDTO());
            }
            return ResponseEntity.ok().body(new InternshipDTO(internship));
        } catch (ValidationException ex) {
            return ResponseEntity.badRequest().body(new InternshipDTO());
        }
    }
    @GetMapping("/all")
    public ResponseEntity<List<InternshipDTO>> findInternships() {

        try {
            List<InternshipDTO> internships = internshipService.getInternships();
            return ResponseEntity.ok().body(internships);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ArrayList<InternshipDTO>());
        }
    }
}
