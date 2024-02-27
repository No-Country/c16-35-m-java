
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
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
    @PostMapping
    public ResponseEntity<?>
    save(@RequestBody Calendary calendary) {
        return ResponseEntity.ok(calendaryService.save(calendary));
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
