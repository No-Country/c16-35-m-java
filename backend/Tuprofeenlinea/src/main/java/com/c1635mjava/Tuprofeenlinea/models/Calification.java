package com.c1635mjava.Tuprofeenlinea.models;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "calification")
public class Calification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int clarity;
    private int punctuality;
    private int preparation;
    private String comment;
    @OneToOne
    private Reservation reservation;
}
