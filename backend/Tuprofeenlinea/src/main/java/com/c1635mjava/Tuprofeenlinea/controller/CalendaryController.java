
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.service.ICalendaryService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/calendary")
public class CalendaryController {

    @Autowired
    private ICalendaryService calendaryService;
    @Autowired
    private IUserService userService;
    @GetMapping
    public ResponseEntity<?>
    findAll() {
        List<Calendary> calendaries = calendaryService.findAll();
        return ResponseEntity.ok(calendaries);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Calendary> findById(@PathVariable Long id) {
        Optional<Calendary> calendary = calendaryService.findById(id);
        return calendary.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<?>
    save(@RequestBody Calendary calendary) {
        return ResponseEntity.ok(calendaryService.save(calendary));
    }
    @PostMapping("/teacher/{teacherId}")
    public ResponseEntity<?>
    save(@PathVariable Long teacherId, @RequestBody Calendary calendary) {
        Client teacher = userService.findById(teacherId).orElse(null);
        if (teacher != null) {
            calendary.setTeacher(teacher);
            Calendary savedCalendary = calendaryService.save(calendary);
            return ResponseEntity.ok(savedCalendary);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?>
    update(@PathVariable Long id, @RequestBody Calendary calendary) {
        calendary.setId(id);
        return ResponseEntity.ok(calendaryService.update(calendary));
    }
    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<?>
    findByTeacher(@PathVariable Long teacherId) {
        Client teacher = userService.findById(teacherId).orElse(null);
        if (teacher != null) {
            List<Calendary> calendaries = calendaryService.
                    findByTeacher(teacher);
            return ResponseEntity.ok(calendaries);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/subject/{subject}")
    public ResponseEntity<?>
    findBySubject(@PathVariable String subject) {
        List<Calendary> calendaries = calendaryService.findBySubject(subject);
        return ResponseEntity.ok(calendaries);
    }
}