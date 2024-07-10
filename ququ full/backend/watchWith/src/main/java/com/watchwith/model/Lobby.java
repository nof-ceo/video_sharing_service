package com.watchwith.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Entity
@Table(name = "lobby")
public class Lobby {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String host;
    private String uuid;
    private String title;
    private int maxParticipants;

}
