
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.service.ICalendaryService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/calendary")
public class CalendaryController {

    @Autowired
    private ICalendaryService calendaryService;
    @Autowired
    private IUserService userService;
    
    @GetMapping("/{id}")//mostrar el calendario identificado por id
    public Optional<Calendary> findById(@PathVariable Long id) {
        return calendaryService.findById(id);
    }   
    @GetMapping
    public ResponseEntity<?>
    findAll() { //mostrar todos los calendarios
        List<Calendary> calendaries = calendaryService.findAll();
        return ResponseEntity.ok(calendaries);
    }
    @PostMapping
    public ResponseEntity<?>//guardar datos de calendario nuevo
    save(@RequestBody Calendary calendary) {
        return ResponseEntity.ok(calendaryService.save(calendary));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?>//actualizar los datos del calendario según id
    update(@PathVariable Long id, @RequestBody Calendary calendary) {
        calendary.setId(id);
        return ResponseEntity.ok(calendaryService.update(calendary));
    }
    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<?>//mostrar los calendarios del id de profesor
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
    public ResponseEntity<?>//mostrar los calendarios de un nombre de materia
    findBySubject(@PathVariable String subject) {
        List<Calendary> calendaries = calendaryService.findBySubject(subject);
        return ResponseEntity.ok(calendaries);
    }
}
