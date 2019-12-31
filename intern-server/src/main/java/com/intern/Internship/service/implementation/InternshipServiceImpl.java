package com.intern.Internship.service.implementation;

import java.util.List;
import java.util.Map;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Company;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;
import com.intern.Internship.model.enums.Direction;
import com.intern.Internship.model.enums.OrderBy;
import com.intern.Internship.repository.InternshipRepository;
import com.intern.Internship.service.InternshipService;
import com.intern.Internship.utils.Converters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

@Service
public class InternshipServiceImpl implements InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    public PageDTO<InternshipDTO> getInternships(int pageNumber, int pageSize, List<AreaOfInterest> areaOfInterestList,
            String sortCriteria, String direction) {
        Order order = null;
        if (direction.equals(Direction.ASC.getDirectionCode())) {
            order = new Order(Sort.Direction.ASC, sortCriteria);
        } else {
            order = new Order(Sort.Direction.DESC, sortCriteria);
        }
        PageDTO<InternshipDTO> pageDTO;
        if (sortCriteria.equals(OrderBy.ADDEDDATE.getOrderByCode())) {
            Page<Internship> page = internshipRepository.findAll(
                    InternshipRepository.multiLikeAreaOfInterest(areaOfInterestList),
                    PageRequest.of(pageNumber, pageSize, Sort.by(order)));
            pageDTO = Converters.internshipPageToInternshipDTOPage(page);

        } else {
            Page<Map<String, ?>> mapPage = internshipRepository
                    .getInternshipsDTO(PageRequest.of(pageNumber, pageSize, Sort.by(order)));
            pageDTO = Converters.mapPageToInternshipDTOPage(mapPage);
        }
        return pageDTO;

    }

    public PageDTO<InternshipDTO> getInternshipsByCompany(int pageNumber, int pageSize, Company company) {
        try {
            Page<Internship> page = internshipRepository.findAllByCompanyName(company.getName(),
                    PageRequest.of(pageNumber, pageSize));
            return Converters.internshipPageToInternshipDTOPage(page);
        } catch (Exception e) {
            e.printStackTrace();
            return new PageDTO<InternshipDTO>();
        }
    }
}
