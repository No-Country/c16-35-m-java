package com.c1635mjava.Tuprofeenlinea.security;

import lombok.Data;
@Data
public class JwtResponse {
    private final String jwtToken;

    public JwtResponse(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
