package com.c1635mjava.Tuprofeenlinea.dtos;


public class ClientDTO {

    private String email;
    private String password;

    // Constructor vacío
    public ClientDTO() {
    }

    // Constructor con parámetros
    public ClientDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters y setters
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

}