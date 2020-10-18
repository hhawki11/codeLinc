package com.codelink.db.springbootmysql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
public class Cards {

    @Id
    @GeneratedValue
    @Column(name = "id_cards")
    private Integer id;
    @Column(name = "term")
    private String term;
    @Column(name = "definition")
    private String definition;
    @Column(name = "Deck_id_deck")
    private Integer deck_idDeck;
    @Column(name = "step")
    private Integer step;
    @Column(name = "due_date")
    private Timestamp due_date;

    public Cards() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTerm() {
        return term;
    }

    public void setTerm(String term) {
        this.term = term;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public Integer getDeck_idDeck() {
        return deck_idDeck;
    }

    public void setDeck_idDeck(Integer deck_idDeck) {
        this.deck_idDeck = deck_idDeck;
    }

    public Integer getStep() {
        return step;
    }

    public void setStep(Integer step) {
        this.step = step;
    }

    public Timestamp getDue_date() {
        return due_date;
    }

    public void setDue_date(Timestamp due_date) {
        this.due_date = due_date;
    }
}
