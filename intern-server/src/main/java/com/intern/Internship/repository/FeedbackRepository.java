package com.intern.Internship.repository;

import com.intern.Internship.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,String> {
    @Query("select f from Feedback f WHERE  f.internship.ID=?1 ")
    Set<Feedback> getFeedbackByInternship(String idInternship);

}
