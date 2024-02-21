
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.service.ICalificationService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/calification")
public class CalificationController {

    @Autowired
    private ICalificationService calificationService;

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Calification calification) {
        return ResponseEntity.ok(calificationService.save(calification));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?>
    update(@PathVariable Long id, @RequestBody Calification calification) {
        calification.setId(id);
        return ResponseEntity.ok(calificationService.update(calification));
    }
}

