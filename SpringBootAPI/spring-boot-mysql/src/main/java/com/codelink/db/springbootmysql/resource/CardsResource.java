package com.codelink.db.springbootmysql.resource;

import com.codelink.db.springbootmysql.model.Cards;
import com.codelink.db.springbootmysql.repository.CardsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/rest/cards")
public class CardsResource {

    @Autowired
    CardsRepository cardsRepository;

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/all")
    public List<Cards> getAll() {
        return cardsRepository.findAll();
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/cardsFromDeck")
    public List<Cards> getCardsFromDeck(@RequestParam int id_deck) {
        return cardsRepository.getCardsFromDeck(id_deck);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(value = "/orderedStep")
    public List<Cards> getOrderedStep(@RequestParam int id_deck) {
        return cardsRepository.getCardsOrderedByStep(id_deck);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(value = "addCard")
    public List<Cards> addCard(@RequestBody Map<String, String> values) {
        cardsRepository.addCard(values.get("term"),
                                values.get("definition"),
                                Integer.valueOf(values.get("deckId")));
        return cardsRepository.getCardsFromDeck(Integer.valueOf(values.get("deckId")));

    }
}
