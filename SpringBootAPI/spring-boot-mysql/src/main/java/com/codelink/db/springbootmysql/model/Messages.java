package com.codelink.db.springbootmysql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
public class Messages {

    @Id
    @GeneratedValue
    @Column(name = "key")
    private Integer id;
    @Column(name = "message_text")
    private String message;
    @Column(name = "date_created")
    private Timestamp timestamp;

    public Messages() {

    }

    public Integer getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
}
