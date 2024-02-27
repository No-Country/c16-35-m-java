package com.c1635mjava.Tuprofeenlinea.models;

public enum Role {
    TEACHER("TEACHER"),
    STUDENT("STUDENT"),
    ADMIN("ADMIN");

    private final String value;

    Role(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
