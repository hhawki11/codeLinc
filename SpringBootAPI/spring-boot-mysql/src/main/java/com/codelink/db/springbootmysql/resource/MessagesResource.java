package com.codelink.db.springbootmysql.resource;

import com.codelink.db.springbootmysql.model.Messages;
import com.codelink.db.springbootmysql.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/rest/messages")
public class MessagesResource {

    @Autowired
    MessageRepository messagesRepository;

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/all")
    public List<Messages> getAll() {
        return messagesRepository.findAll();
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/allOrdered")
    public List<Messages> getAllOrdered() {
        return messagesRepository.getMessageByDate();
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/getRecentTenMessages")
    public List<String> getRecentTenMessages() {
        return messagesRepository.getRecentTenMessages();
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/add")
    public List<Messages> addNewMessage(@RequestBody final String message) {
        messagesRepository.insertMessageIntoTable(message);
        return messagesRepository.getMessageByDate();
    }
}
