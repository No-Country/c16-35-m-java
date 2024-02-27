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
    private String imagePath;
    public ClientDTO() {
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }



    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getDescriptionTeacher() {
        return descriptionTeacher;
    }

    public void setDescriptionTeacher(String descriptionTeacher) {
        this.descriptionTeacher = descriptionTeacher;
    }

    public String getDescriptionBiography() {
        return descriptionBiography;
    }

    public void setDescriptionBiography(String descriptionBiography) {
        this.descriptionBiography = descriptionBiography;
    }




    public Long getId() {
        return id;
    }



    public void setPasswordWithEncoder(String password, PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);
    }




    private Long id;

    public void ClientIdDTO() {
    }

    public void ClientIdDTO(Long id) {
        this.id = id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getLastName() {
        return getLastname();
    }
}