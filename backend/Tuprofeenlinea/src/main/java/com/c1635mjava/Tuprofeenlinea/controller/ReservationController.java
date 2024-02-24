
package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.service.ICalendaryService;
import com.c1635mjava.Tuprofeenlinea.service.IReservationService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin (origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private IReservationService reservationService;
    @Autowired
    private IUserService userService;
    @Autowired
    private ICalendaryService calendaryService;
    
    
    @GetMapping("/{id}")//mostrar la reserva identificada por id
    public Optional<Reservation> findById(@PathVariable Long id) {
        return reservationService.findById(id);
    }
    @GetMapping
    public ResponseEntity<?>
    findAll() {//mostrar todas las reservas
        List<Reservation> reservations = reservationService.findAll();
        return ResponseEntity.ok(reservations);
    }
    @PostMapping
    public ResponseEntity<?>//guardar datos de reserva
    save(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.save(reservation));
    }
    @PutMapping("/{id}")
    public ResponseEntity<?>//actualizar datos de reserva por id
    update(@PathVariable Long id, @RequestBody Reservation reservation) {
        reservation.setId(id);
        return ResponseEntity.ok(reservationService.update(reservation));
    }
    @GetMapping("/student/{studentId}")
    public ResponseEntity<?>//mostrar las reservas del estudiante identificado por id
    findByStudent(@PathVariable Long studentId) {
        Client student = userService.findById(studentId).orElse(null);
        if (student != null) {
            List<Reservation> reservations = reservationService.
                    findByStudent(student);
            return ResponseEntity.ok(reservations);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/calendary/{calendaryId}")
    public ResponseEntity<?>//mostrar las reservas del calendario identificado por id
    findByCalendary(@PathVariable Long calendaryId) {
        Calendary calendary = calendaryService.findById(calendaryId).orElse(null);
        if (calendary != null) {
            List<Reservation> reservations = reservationService.
                    findByCalendary(calendary);
            return ResponseEntity.ok(reservations);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
