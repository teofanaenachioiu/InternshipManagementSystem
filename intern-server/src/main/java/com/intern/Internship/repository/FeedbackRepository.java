package com.intern.Internship.repository;

import com.intern.Internship.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback,String> {
}
