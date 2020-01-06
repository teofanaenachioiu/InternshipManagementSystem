package com.intern.Internship.controller;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.service.AreaOfInterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/areaOfInterest")
@CrossOrigin(origins = "http://localhost:4200")
public class AreaOfInterestController {
    @Autowired
    AreaOfInterestService areaOfInterestService;

    @GetMapping
    public ResponseEntity<List<String>> findAll() {
        try {
            List<String> areasOfInterest = areaOfInterestService.findAll();
            return ResponseEntity.ok().body(areasOfInterest);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ArrayList<>());
        }
    }
}
