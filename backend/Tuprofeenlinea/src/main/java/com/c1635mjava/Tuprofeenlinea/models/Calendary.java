package com.c1635mjava.Tuprofeenlinea.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@JsonIgnoreProperties({"teacher", "reservations"})
@Table(name = "calendary")
public class Calendary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String subject;
    private LocalDate startDate;
    private LocalDate endDate;
    private int startHour;
    private int endHour;
    private String descriptionCurse;
    private int price;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Client teacher;

    @OneToMany(mappedBy = "calendary")
    private List<Reservation> reservations;

    public void setStartHour(int i) {
    }

    public Calendary (){
        this.subject = "";
    }
}