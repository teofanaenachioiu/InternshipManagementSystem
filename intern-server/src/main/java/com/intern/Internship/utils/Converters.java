package com.intern.Internship.utils;

import com.intern.Internship.model.Internship;
import com.intern.Internship.model.dto.InternshipDTO;
import com.intern.Internship.model.dto.PageDTO;
import org.springframework.data.domain.Page;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Converters {
    public static PageDTO<InternshipDTO> mapPageToInternshipDTOPage(Page<Map<String, ?>> page) {
        PageDTO<InternshipDTO> pageDTO = new PageDTO<>();
        List<InternshipDTO> internshipDTOS = new ArrayList<>();
        for (Map<String, ?> map : page.getContent()) {
            InternshipDTO internshipDTO = new InternshipDTO(map);
            internshipDTOS.add(internshipDTO);
        }
        return getInternshipDTOPageDTO(pageDTO, internshipDTOS, page.hasNext(), page.hasPrevious(),
                page.getTotalPages(), page);
    }

    public static PageDTO<InternshipDTO> internshipPageToInternshipDTOPage(Page<Internship> page) {
        PageDTO<InternshipDTO> pageDTO = new PageDTO<>();
        List<Internship> internships = page.getContent();
        List<InternshipDTO> internshipDTOS = new ArrayList<>();
        for (Internship internship1 : internships) {
            InternshipDTO internshipDTO = new InternshipDTO(internship1);
            internshipDTOS.add(internshipDTO);
        }
        return getInternshipDTOPageDTO(pageDTO, internshipDTOS, page.hasNext(), page.hasPrevious(),
                page.getTotalPages(), page);
    }

    private static <T> PageDTO<InternshipDTO> getInternshipDTOPageDTO(PageDTO<InternshipDTO> pageDTO,
            List<InternshipDTO> internshipDTOS, boolean hasNext, boolean hasPrevious, int totalPages, Page<T> page) {
        pageDTO.setContent(internshipDTOS);
        pageDTO.setHasNext(hasNext);
        pageDTO.setHasPrevious(hasPrevious);
        pageDTO.setNbPages(totalPages);
        return pageDTO;
    }
}
