package com.codelink.db.springbootmysql.repository;

import com.codelink.db.springbootmysql.model.Cards;
import com.codelink.db.springbootmysql.model.Decks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface DecksRepository extends JpaRepository<Decks, Integer> {

    @Query(value = "SELECT * FROM DECKS ORDER BY name LIMIT :limit", nativeQuery = true)
    List<Decks> getAllOrderedByName(@Param("limit") int limit);

    @Query(value = "SELECT MAX(id_deck) FROM DECKS", nativeQuery = true)
    Integer getMostRecentAdd();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO DECKS (name, description) VALUES (:name, :description)", nativeQuery = true)
    void addDeck(@Param("name") String name,
                 @Param("description") String description);
}
