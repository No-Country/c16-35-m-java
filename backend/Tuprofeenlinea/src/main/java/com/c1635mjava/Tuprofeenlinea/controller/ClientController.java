package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/client")
@Configuration
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerClient(@RequestBody ClientDTO clientDTO) {
        // Validar si el cliente ya existe
        if (clientRepository.findByUsername(clientDTO.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }

        // Crear un nuevo cliente
        Client client = new Client();
        client.setUsername(clientDTO.getUsername());
        // Hash de la contraseña antes de almacenarla
        client.setPassword(passwordEncoder.encode(clientDTO.getPassword()));

        // Guardar el cliente en la base de datos
        clientRepository.save(client);

        return ResponseEntity.ok("Client registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginClient(@RequestBody ClientDTO clientDTO) {
        try {
            // Autenticar al cliente
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(clientDTO.getUsername(), clientDTO.getPassword())
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Obtener los detalles del usuario autenticado
            UserDetails userDetails = userDetailsService.loadUserByUsername(clientDTO.getUsername());

            // Devolver los detalles del usuario en la respuesta
            return ResponseEntity.ok(userDetails);
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
