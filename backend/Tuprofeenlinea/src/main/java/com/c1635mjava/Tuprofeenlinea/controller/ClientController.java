
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private IUserService userService;
    @GetMapping
    public ResponseEntity<?>
    findAll() {
        List<Client> clients = userService.findAll();
        return ResponseEntity.ok(clients);
    }
    @PostMapping
    public ResponseEntity<?>
    save(@RequestBody Client client) {
        client.setPassword(bcrypt.encode(client.getPassword()));
        return ResponseEntity.ok(userService.save(client));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?>
    update(@PathVariable Long id, @RequestBody Client client) {
        client.setId(id);
        return ResponseEntity.ok(userService.update(client));
    }
}