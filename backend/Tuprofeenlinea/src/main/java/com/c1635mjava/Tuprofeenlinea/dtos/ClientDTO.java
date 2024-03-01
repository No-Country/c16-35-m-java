package com.c1635mjava.Tuprofeenlinea.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;

@Data
public class ClientDTO {

    private String email;
    private String password;
    private String name;
    private String lastname;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthday;
    private String descriptionTeacher;
    private String descriptionBiography;

    public ClientDTO() {
    }

    public ClientDTO(String email, String password, String name, String lastname, LocalDate birthday, String descriptionTeacher, String descriptionBiography) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.birthday = birthday;
        this.descriptionTeacher = descriptionTeacher;
        this.descriptionBiography = descriptionBiography;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    private Long id;

    public void setId(Long id) {
        this.id = id;
    }
}
