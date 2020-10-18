package com.codelink.db.springbootmysql.repository;


import com.codelink.db.springbootmysql.model.Cards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CardsRepository extends JpaRepository<Cards, Integer> {

    @Query(value = "SELECT * FROM CARDS WHERE Deck_id_deck = :id_deck ORDER BY Step DESC", nativeQuery = true)
    List<Cards> getCardsOrderedByStep(@Param("id_deck") int id_deck);

    @Query(value = "SELECT * FROM CARDS WHERE Deck_id_deck = :id_deck", nativeQuery = true)
    List<Cards> getCardsFromDeck(@Param("id_deck") Integer deckId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO CARDS (term, definition, Deck_id_deck) VALUES (:term, :definition, :deckId)", nativeQuery = true)
    void addCard(@Param("term") String term,
                 @Param("definition") String definition,
                 @Param("deckId") int deckId);
}
