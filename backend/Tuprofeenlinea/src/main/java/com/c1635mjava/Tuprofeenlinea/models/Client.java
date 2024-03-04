package com.c1635mjava.Tuprofeenlinea.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "client")
//public class Client implements Serializable
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String name;
    private String lastname;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday;

    @Column(name = "description_teacher", length = 1000)
    private String descriptionTeacher;

    @Column(name = "description_biography", length = 1000)
    private String descriptionBiography;
    private boolean enabled = true;
    private String imagePath;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Reservation> reservationList;
    @JsonIgnore
    @OneToMany(mappedBy = "teacher")
    private List<Calendary> teachingCalendaries;

    @Column(name = "role")
    private String role;

    public Client() {
        this.reservationList = new ArrayList<>();
        this.teachingCalendaries = new ArrayList<>();
        this.role = "TEACHER";
    }

}
