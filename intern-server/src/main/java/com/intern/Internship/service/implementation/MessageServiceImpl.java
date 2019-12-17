package com.intern.Internship.service.implementation;

import com.intern.Internship.model.Message;
import com.intern.Internship.repository.MessageRepository;
import com.intern.Internship.service.MessageService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepo;

    public void save(Message message) {
        messageRepo.save(message);
    }
}