package com.intern.Internship.service;

import java.util.List;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;

public interface InternshipService {
    PageDTO<InternshipDTO> getInternships(int pageNumber, int pageSize, List<AreaOfInterest> areaOfInterestList,
            String sortCriteria, String sortDirection);
}
