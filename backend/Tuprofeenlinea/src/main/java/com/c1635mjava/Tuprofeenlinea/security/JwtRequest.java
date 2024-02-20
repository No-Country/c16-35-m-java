package com.c1635mjava.Tuprofeenlinea.security;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtRequest {
    private String email;
    private String password;

    // Constructor sin argumentos
    public JwtRequest() {
    }
}
