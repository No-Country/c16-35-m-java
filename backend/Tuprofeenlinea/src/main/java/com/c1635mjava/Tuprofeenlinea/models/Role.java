package com.c1635mjava.Tuprofeenlinea.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String rol;
}
