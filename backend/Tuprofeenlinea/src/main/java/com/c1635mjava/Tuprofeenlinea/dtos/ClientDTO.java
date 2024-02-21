
package com.c1635mjava.Tuprofeenlinea.dtos;

import lombok.Data;

@Data
public class ClientDTO {

    private String email;
    private String password;

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}