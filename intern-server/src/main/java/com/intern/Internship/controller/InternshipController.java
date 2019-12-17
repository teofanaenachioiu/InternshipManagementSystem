package com.intern.Internship.controller;

import java.util.Arrays;
import java.util.List;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;
import com.intern.Internship.model.enums.Direction;
import com.intern.Internship.model.enums.OrderBy;
import com.intern.Internship.service.AreaOfInterestService;
import com.intern.Internship.service.InternshipService;
import com.intern.Internship.service.exceptions.PaginationSortingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class InternshipController {
    @Autowired
    private InternshipService internshipService;

    @Autowired
    private AreaOfInterestService areaOfInterestService;

    @GetMapping("/api/home/internships")
    public PageDTO<InternshipDTO> findJsonDataByPageAndSize(@RequestParam("filter") String filter,
            @RequestParam("orderBy") String orderBy, @RequestParam("direction") String direction,
            @RequestParam("page") int page, @RequestParam("size") int size) {

        String[] strFilter = filter.split(",");
        List<String> listFilters = Arrays.asList(strFilter);

        if (!(direction.equals(Direction.ASC.getDirectionCode())

                || direction.equals(Direction.DESC.getDirectionCode()))) {

            throw new PaginationSortingException("Invalid sort direction");
        }
        if (!(orderBy.equals(OrderBy.ADDEDDATE.getOrderByCode()) || orderBy.equals(OrderBy.AVGFEEDBACK.getOrderByCode())
                || orderBy.equals(OrderBy.NBFFEEDBACK.getOrderByCode()))) {
            throw new PaginationSortingException("Invalid orderBy condition");

        }
        List<AreaOfInterest> areasOfInterest = areaOfInterestService.findAll(listFilters);

        PageDTO<InternshipDTO> pageInternship = internshipService.getInternships(page, size, areasOfInterest, orderBy,
                direction);
        return pageInternship;
    }
}
