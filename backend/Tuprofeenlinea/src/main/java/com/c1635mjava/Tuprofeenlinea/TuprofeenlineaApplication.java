package com.c1635mjava.Tuprofeenlinea;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TuprofeenlineaApplication {
	public static void main(String[] args) {
		SpringApplication.run(TuprofeenlineaApplication.class, args);
	}
}
