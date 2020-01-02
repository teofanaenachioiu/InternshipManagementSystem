package com.intern.Internship.repository;

import com.intern.Internship.model.AreaOfInterest;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class AreaOfInterestRepositoryTest {
    @Autowired
    AreaOfInterestRepository areaOfInterestRepository;

    @Test
    public void test() {
        long countBefore = areaOfInterestRepository.count();
        AreaOfInterest areaOfInterest1 = new AreaOfInterest("Programming1", "Type1");
        areaOfInterestRepository.saveAndFlush(areaOfInterest1);
        assert (areaOfInterestRepository.count() == countBefore + 1);
        AreaOfInterest areaOfInterest2 = new AreaOfInterest("Programming2", "Type2");
        areaOfInterestRepository.saveAndFlush(areaOfInterest2);
        assert (areaOfInterestRepository.count() == countBefore + 2);
        assert (areaOfInterestRepository.findAll().contains(areaOfInterest1));
        assert (areaOfInterestRepository.findAll().contains(areaOfInterest2));
        AreaOfInterest fromRepository = areaOfInterestRepository.getOne(areaOfInterest1.getID());
        assert (fromRepository.getName() != null);
        areaOfInterestRepository.delete(areaOfInterest1);
        areaOfInterestRepository.delete(areaOfInterest2);
        assert (areaOfInterestRepository.count() == countBefore);
    }
}