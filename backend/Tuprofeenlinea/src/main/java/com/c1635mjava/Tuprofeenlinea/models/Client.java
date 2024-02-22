package com.c1635mjava.Tuprofeenlinea.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id; 
    private String email;
    private String password;
    private String name;
    private String lastname;
    private LocalDate birthday;
    private String descriptionTeacher;
    private String descriptionBiography;
    private boolean enabled;
    @OneToMany(mappedBy = "student")
    private List<Reservation> reservationList;
    @OneToMany(mappedBy = "teacher")
    private List<Calendary> teachingCalendaries;
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "role_Id")

    private Role role;
}
