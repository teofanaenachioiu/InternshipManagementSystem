package com.intern.Internship.repository;

import com.intern.Internship.model.*;
import com.intern.Internship.model.enums.CandidateStatus;
import com.intern.Internship.model.enums.InternshipStatus;
import com.intern.Internship.model.enums.Sex;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.HashSet;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class FeedbackRepositoryTest {
    @Autowired
    AreaOfInterestRepository areaOfInterestRepository;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    FeedbackRepository feedbackRepository;

    @Autowired
    InternshipRepository internshipRepository;

    @Autowired
    CandidateRepository candidateRepository;

    @Autowired
    ExperienceRepository experienceRepository;

    @Autowired
    StudiesRepository studiesRepository;

    @Test
    public void test() {
        Candidate candidate = new Candidate(
                "utilizator@domeniu.com",
                "Popescu",
                "Ion",
                "Zambilei 12",
                "0700123456",
                LocalDate.now(),
                Sex.M,
                CandidateStatus.Open,
                new byte[10],
                "LinkedIn goes here",
                "Github goes here",
                "Description goes here",
                new HashSet<>(),
                new HashSet<>()
        );

        HashSet<Studies> studiesHashSet = new HashSet<>();
        Studies studies1 = new Studies(
                "Liceul de Chimie Cucuietii din Dealu Mare",
                "Matematica-Muzica",
                LocalDate.now(),
                LocalDate.now(),
                "Descriere 1",
                candidate
        );
        studiesHashSet.add(studies1);
        Studies studies2 = new Studies(
                "UBB CJ",
                "FMI",
                LocalDate.now(),
                LocalDate.now(),
                "Descriere 2",
                candidate
        );
        studiesHashSet.add(studies2);
        studiesRepository.save(studies1);
        studiesRepository.save(studies2);
        candidate.setStudies(studiesHashSet);

        HashSet<Experience> experienceHashSet = new HashSet<>();
        Experience experience1 = new Experience(
                "Company 1",
                LocalDate.now(),
                LocalDate.now(),
                "Junior programmer",
                candidate
        );
        experienceHashSet.add(experience1);
        Experience experience2 = new Experience(
                "Company 2",
                LocalDate.now(),
                LocalDate.now(),
                "Senior programmer",
                candidate
        );
        experienceHashSet.add(experience2);
        experienceRepository.save(experience1);
        experienceRepository.save(experience2);
        candidate.setExperiences(experienceHashSet);
        candidateRepository.save(candidate);

        long countBefore = feedbackRepository.count();
        byte[] bytes = "BLOB GOES HERE".getBytes();
        Company company1 = new Company(
                "tudor@ginga.com",
                "Company1",
                "Zambilei 12",
                "0700000000",
                "Description1",
                "Intenships",
                bytes
        );
        AreaOfInterest areaOfInterest1 = new AreaOfInterest(
                "SAP"
        );
        AreaOfInterest areaOfInterest2 = new AreaOfInterest(
                "Java"
        );
        areaOfInterestRepository.save(areaOfInterest1);
        areaOfInterestRepository.save(areaOfInterest2);
        Internship internship11 = new Internship(
                "Internship11",
                LocalDate.now(),
                LocalDate.now(),
                false,
                3,
                "Company 1 Internship 1",
                5,
                InternshipStatus.Closed,
                "Zambilei 14",
                LocalDate.now(),
                company1,
                areaOfInterest1
        );
        Internship internship12 = new Internship(
                "Internship12",
                LocalDate.now(),
                LocalDate.now(),
                true,
                4,
                "Company 1 Internship 2",
                3,
                InternshipStatus.Open,
                "Zambilei 15",
                LocalDate.now(),
                company1,
                areaOfInterest2
        );
        Feedback feedback111 = new Feedback(
                "Description1",
                true,
                5,
                candidate,
                internship11
        );
        Feedback feedback112 = new Feedback(
                "Description2",
                false,
                4,
                candidate,
                internship11
        );
        Feedback feedback121 = new Feedback(
                "Description3",
                true,
                6,
                candidate,
                internship12
        );
        Feedback feedback122 = new Feedback(
                "Description4",
                false,
                7,
                candidate,
                internship12
        );
        feedbackRepository.save(feedback111);
        feedbackRepository.save(feedback112);
        feedbackRepository.save(feedback121);
        feedbackRepository.save(feedback122);

        Feedback fromRepositoryFeedback1 = feedbackRepository.getOne(feedback111.getID());
        assert (fromRepositoryFeedback1.getInternship().getAreaOfInterest() != null);
        assert (fromRepositoryFeedback1.getCandidate().getLastName().equals("Popescu"));

        HashSet<Feedback> hashSet1 = new HashSet<>();
        hashSet1.add(feedback111);
        hashSet1.add(feedback112);
        internship11.setFeedbacks(hashSet1);
        HashSet<Feedback> hashSet2 = new HashSet<>();
        hashSet2.add(feedback121);
        hashSet2.add(feedback122);
        internship12.setFeedbacks(hashSet2);
        internshipRepository.save(internship11);
        internshipRepository.save(internship12);
        HashSet<Internship> hashSet3 = new HashSet<>();
        hashSet3.add(internship11);
        hashSet3.add(internship12);
        company1.setInternships(hashSet3);
        companyRepository.save(company1);
        assert (feedbackRepository.count() == countBefore + 4);
    }
}