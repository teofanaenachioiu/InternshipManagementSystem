package com.intern.Internship.controller;

import com.intern.Internship.service.AreaOfInterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/api/areaOfInterest")
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

    @GetMapping("/all")
    public ResponseEntity<List<String>> getAll(@RequestParam("email") String email) {
        try {
            List<String> areasOfInterest = areaOfInterestService.findAll(email);
            return ResponseEntity.ok().body(areasOfInterest);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(new ArrayList<>());
        }
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestParam("email") String email, @RequestBody List<String> areaOfInterests) {
        try {
            areaOfInterestService.update(email, areaOfInterests);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }
}
