package com.c1635mjava.Tuprofeenlinea.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "calification")
public class  Calification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int clarity;
    private int punctuality;
    private int preparation;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    @JsonIgnore
    private Client teacher;

    @OneToOne
    @JoinColumn(name = "reservation_id")
    @JsonIgnore
    private Reservation reservation;
}