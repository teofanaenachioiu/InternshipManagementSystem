package com.intern.Internship.service;

import java.util.List;

import com.intern.Internship.model.Internship;
import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;

public interface InternshipService {
    PageDTO<InternshipDTO> getInternships(int pageNumber, int pageSize, List<AreaOfInterest> areaOfInterestList,
            String sortCriteria, String sortDirection);

    PageDTO<InternshipDTO> getInternshipsByCompanyPaginated(int pageNumber, int pageSize, String companyName);

    List<InternshipDTO> getInternshipsByCompany(String companyName);

    PageDTO<InternshipDTO> getInternshipsByCandidate(int page, int size, String companyName);

    Internship findById(String internshipId);

    void delete(Internship internship);

    Internship update(InternshipDTO internshipDTO);

    Internship save(InternshipDTO internshipDTO);

    List<InternshipDTO> getInternships();
}