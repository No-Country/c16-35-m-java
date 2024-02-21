package com.c1635mjava.Tuprofeenlinea.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "calendary")
public class Calendary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subject;
    private LocalDate startDate;
    private LocalDate endDate;
    private int starHour;
    private int endHour;
    private String descriptionCurse;
    private int price;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Client teacher;
}
