package com.intern.Internship.repository;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;

import com.intern.Internship.model.AreaOfInterest;
import com.intern.Internship.model.Internship;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface InternshipRepository extends JpaRepository<Internship, String>, JpaSpecificationExecutor<Internship> {
    static Specification<Internship> multiLikeAreaOfInterest(List<AreaOfInterest> likePatterns) {
        return (Specification<Internship>) (root, query, criteriaBuilder) -> {
            Path<String> column1 = root.get("areaOfInterest").get("name");
            // create a Predicate for each "column1 like 'xy%az%' you need
            List<Predicate> predicates = likePatterns.stream()
                    .map(likePattern -> criteriaBuilder.like(column1, likePattern.getName()))
                    .collect(Collectors.toList());

            return criteriaBuilder.or(predicates.toArray(new Predicate[] {}));
        };
    }
    
    @Query("select i from Internship i,Company c WHERE i.company.ID like c.ID and c.name=?1 ")
    Page<Internship> findAllByCompanyName(String companyName, Pageable page);

    @Query("select i.ID as id," + " i.name as name," + " i.startTime as startTime," + "i.endTime as endTime,"
            + "i.paid as paid," + "i.nrMonths as nrMonths," + "i.description as description,"
            + "i.nrApplicants as nrApplicants," + "i.status as status," + "i.location as location,"
            + "i.addedDate as addedDate," + "i.company.name as company," + "i.areaOfInterest.id as areaOfInterest,"
            + "avg(f.rating) as averageOfFeedbacks," + "count(i.ID) as numberOfFeedbacks"
            + " from Internship as i INNER join Feedback f  on i.ID=f.internship.id " + "group by i.ID")
    Page<Map<String, ?>> getInternshipsDTO(Pageable pageable);
}
