package com.intern.Internship.repository;

import com.intern.Internship.model.*;
import com.intern.Internship.model.enums.CandidateStatus;
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
class StudiesRepositoryTest {
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
                "Languages go here",
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

        Studies fromRepository = studiesRepository.getOne(studies1.getID());
        assert (fromRepository.getCandidate().getLastName().equals("Popescu"));
        assert (fromRepository.getCandidate().getExperiences().size() == 2);
    }
}