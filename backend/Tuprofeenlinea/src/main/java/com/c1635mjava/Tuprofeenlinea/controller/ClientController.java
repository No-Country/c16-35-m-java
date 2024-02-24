
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.service.impl.ClientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private ClientServiceImpl clientService;
    @GetMapping("/{id}")//mostrar el cliente identificado por id
    public Optional<Client> findById(@PathVariable Long id) {
        return clientService.findById(id);
    }
    @GetMapping
    public ResponseEntity<?>
    findAll() { //mostrar todos los clientes
        List<Client> clients = clientService.findAll();
        return ResponseEntity.ok(clients);
    }
    @PostMapping
    public ResponseEntity<?>
    save(@RequestBody Client client) { //guardar datos de cliente
        client.setPassword(bcrypt.encode(client.getPassword()));
        return ResponseEntity.ok(clientService.save(client));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> //actualizar los datos del cliente según id
    update(@PathVariable Long id, @RequestBody Client client) {
        client.setId(id);
        return ResponseEntity.ok(clientService.update(client));
    }
    @GetMapping("/role/{rol}")
    public ResponseEntity<?>//mostrar los clientes dado un nombre de rol
    findByRole(@PathVariable String rol) {
        List<Client> clientsOfRole = clientService.findByRole_Rol(rol);
        return ResponseEntity.ok(clientsOfRole);
    }
}
