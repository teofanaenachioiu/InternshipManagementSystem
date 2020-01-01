package com.intern.Internship.service.implementation;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Company;
import com.intern.Internship.model.Internship;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;
import com.intern.Internship.model.enums.Direction;
import com.intern.Internship.model.enums.OrderBy;
import com.intern.Internship.repository.AreaOfInterestRepository;
import com.intern.Internship.repository.CompanyRepository;
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

    @Autowired
    private AreaOfInterestRepository areaOfInterestRepository;

    @Autowired
    private CompanyRepository companyRepository;

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

    public PageDTO<InternshipDTO> getInternshipsByCompany(int pageNumber, int pageSize, String companyName) {
        Company company = companyRepository.findByName(companyName);
        Page<Internship> page = internshipRepository.findAllByCompanyName(company.getName(),
                PageRequest.of(pageNumber, pageSize));
        return Converters.internshipPageToInternshipDTOPage(page);
    }

    public PageDTO<InternshipDTO> getInternshipsByCandidate(int pageNumber, int size, String candidateId) {
        Page<Internship> page = internshipRepository.findAllByCandidateId(candidateId,
                PageRequest.of(pageNumber, size));

        return Converters.internshipPageToInternshipDTOPage(page);
    }

    public Internship findById(String internshipId) {
        Optional<Internship> result = internshipRepository.findById(internshipId);
        return (result.isPresent()) ? result.get() : null;
    }

    public void delete(Internship internship) {
        internshipRepository.delete(internship);
    }

    public Internship save(InternshipDTO internshipDTO) {
        Internship internship = findById(internshipDTO.getID());
        if (internship == null) {
            Company company = companyRepository.findByName(internshipDTO.getCompany());
            AreaOfInterest areaOfInterest = areaOfInterestRepository.findByName(internshipDTO.getAreaOfInterest());

            internship = Converters.toInternship(internshipDTO);
            internship.setCompany(company);
            internship.setAreaOfInterest(areaOfInterest);
            return internshipRepository.save(internship);
        }
        return null;
    }

    public Internship update(InternshipDTO internshipDTO) {
        Internship intern = findById(internshipDTO.getID());
        if (intern != null) {
            intern = Converters.dtoToInternshipUpdate(intern, internshipDTO);
            if (internshipDTO.getAreaOfInterest() != null) {
                AreaOfInterest areaOfInterest = areaOfInterestRepository.findByName(internshipDTO.getAreaOfInterest());
                intern.setAreaOfInterest(areaOfInterest);
            }
            return internshipRepository.save(intern);
        }
        return intern;
    }
}
