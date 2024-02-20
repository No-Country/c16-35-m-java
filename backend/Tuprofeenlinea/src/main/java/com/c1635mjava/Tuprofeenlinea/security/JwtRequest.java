package com.c1635mjava.Tuprofeenlinea.security;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JwtRequest {
    private String email;
    private String password;


    public JwtRequest() {
    }
}
