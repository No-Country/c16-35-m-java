package com.c1635mjava.Tuprofeenlinea.controller;
import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

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
}
