
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private IUserService userService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody ClientDTO client) {
        client.setPassword(bcrypt.encode(client.getPassword()));
        return ResponseEntity.ok(userService.save(client));
    }

}

