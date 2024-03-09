package com.c1635mjava.Tuprofeenlinea.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "reservation")
@JsonIgnoreProperties({"student", "calendary"})
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateAndHour;
    private boolean payed;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Client student;

    @ManyToOne
    @JoinColumn(name = "calendary_id")
    private Calendary calendary;

}
