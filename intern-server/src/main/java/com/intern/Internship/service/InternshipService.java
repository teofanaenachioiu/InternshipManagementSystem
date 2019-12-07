package com.intern.Internship.service;


import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;
import com.intern.Internship.model.enums.Direction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface InternshipService {
    PageDTO<InternshipDTO> getInternships(int pageNumber, int pageSize, List<AreaOfInterest> areaOfInterestList, String sortCriteria, String sortDirection);
}
