package com.intern.Internship.repository;

import com.intern.Internship.model.Message;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class MessageRepositoryTest {
    @Autowired
    MessageRepository messageRepository;

    @Test
    public void test() {
        long countBefore = messageRepository.count();
        Message message1 = new Message(
                "Tudor Ginga",
                "tudor.g@gmail.com",
                "Subiect de test",
                "0700000000",
                "Mesajul este acesta"
        );
        messageRepository.saveAndFlush(message1);
        assert (messageRepository.count() == countBefore + 1);
        Message message2 = new Message(
                "Tudor Ginga1",
                "tudor.g1@gmail.com",
                "Subiect de test1",
                "0700000001",
                "Mesajul este acesta1"
        );
        messageRepository.saveAndFlush(message2);
        assert (messageRepository.count() == countBefore + 2);
        assert (messageRepository.findAll().contains(message1));
        assert (messageRepository.findAll().contains(message2));
        messageRepository.delete(message1);
        messageRepository.delete(message2);
        assert (messageRepository.count() == countBefore);
    }
}