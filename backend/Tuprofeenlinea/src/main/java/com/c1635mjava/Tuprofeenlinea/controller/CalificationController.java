
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.service.ICalificationService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import com.c1635mjava.Tuprofeenlinea.service.impl.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/calification")
public class CalificationController {

    @Autowired
    private ICalificationService calificationService;
    @Autowired
    private ReservationServiceImpl reservationService;
    @GetMapping
    public ResponseEntity<?>
    findAll() {
        List<Calification> califications = calificationService.findAll();
        return ResponseEntity.ok(califications);
    }
    @PostMapping
    public ResponseEntity<?>
    save(@RequestBody Calification calification) {
        return ResponseEntity.ok(calificationService.save(calification));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?>
    update(@PathVariable Long id, @RequestBody Calification calification) {
        calification.setId(id);
        return ResponseEntity.ok(calificationService.update(calification));
    }
    @GetMapping("/reservation/{reservationId}")
    public ResponseEntity<?>
    findByReservation(@PathVariable Long reservationId){
        Reservation reservation = reservationService.
                findById(reservationId).orElse(null);
        if(reservation != null){
            List<Calification> califications = calificationService.
                    findByReservation(reservation);
            return ResponseEntity.ok(califications);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
