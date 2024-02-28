package com.c1635mjava.Tuprofeenlinea.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private int duration;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Client student;

    @ManyToOne
    @JoinColumn(name = "calendary_id")
    private Calendary calendary;

}