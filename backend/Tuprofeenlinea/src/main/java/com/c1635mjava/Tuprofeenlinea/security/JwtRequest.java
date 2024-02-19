package com.c1635mjava.Tuprofeenlinea.security;

import lombok.Data;

@Data
public class JwtRequest {
    private String email;
    private String password;
}
