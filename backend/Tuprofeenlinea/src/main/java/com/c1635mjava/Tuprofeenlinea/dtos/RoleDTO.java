package com.c1635mjava.Tuprofeenlinea.dtos;
import lombok.Data;
public class RoleDTO {
    private Long id;
    private String rol;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }
}

