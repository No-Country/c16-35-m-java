package com.c1635mjava.Tuprofeenlinea.dtos;


public class ClientDTO {

    private String username;
    private String password;

    // Constructor vacío
    public ClientDTO() {
    }

    // Constructor con parámetros
    public ClientDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters y setters
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

}