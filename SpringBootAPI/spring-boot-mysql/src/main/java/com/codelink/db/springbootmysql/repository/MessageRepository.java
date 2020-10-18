package com.codelink.db.springbootmysql.repository;

import com.codelink.db.springbootmysql.model.Messages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MessageRepository extends JpaRepository<Messages, Integer> {

    @Query(value = "SELECT * FROM MESSAGES ORDER BY UNIX_TIMESTAMP(date_created) DESC", nativeQuery = true)
    List<Messages> getMessageByDate();

    @Query(value = "SELECT message_text FROM MESSAGES ORDER BY UNIX_TIMESTAMP(date_created) DESC LIMIT 10", nativeQuery = true)
    List<String> getRecentTenMessages();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO MESSAGES (message_text) VALUES (:message)", nativeQuery = true)
    void insertMessageIntoTable(@Param("message") String message);
}
