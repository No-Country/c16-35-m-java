package com.c1635mjava.Tuprofeenlinea.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
@Entity
@Data
@Table(name = "reservation")
@JsonIgnoreProperties({"student", "calendary" ,"calification"})
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateAndHour;
    private boolean payed;


    @Enumerated(EnumType.STRING)
    private ReservationState state;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Client student;

    @ManyToOne
    @JoinColumn(name = "calendary_id")
    private Calendary calendary;

    @OneToOne(mappedBy = "reservation", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Calification calification;
    public Reservation() {

        this.state = ReservationState.IN_PROGRESS;    }

}
