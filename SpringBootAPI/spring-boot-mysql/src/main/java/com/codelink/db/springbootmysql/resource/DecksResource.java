package com.codelink.db.springbootmysql.resource;

import com.codelink.db.springbootmysql.model.Decks;
import com.codelink.db.springbootmysql.repository.DecksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/rest/decks")
public class DecksResource {

    @Autowired
    DecksRepository decksRepository;

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/all")
    public List<Decks> getAll() {
        return decksRepository.findAll();
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "allOrdered")
    public List<Decks> getAllOrdered(@RequestParam(defaultValue = "10") int limit) {
        return decksRepository.getAllOrderedByName(limit);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "add")
    public Integer addDeck(@RequestBody Map<String, String> values) {
        decksRepository.addDeck(values.get("name"), values.get("description"));
        return decksRepository.getMostRecentAdd();
    }
}
