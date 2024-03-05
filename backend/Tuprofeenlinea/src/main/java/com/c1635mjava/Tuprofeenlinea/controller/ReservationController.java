package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.service.ICalendaryService;
import com.c1635mjava.Tuprofeenlinea.service.IReservationService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/reservation")
public class ReservationController {

    @Autowired
    private IReservationService reservationService;

    @Autowired
    private IUserService userService;

    @Autowired
    private ICalendaryService calendaryService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        List<Reservation> reservations = reservationService.findAll();
        return ResponseEntity.ok(reservations);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Reservation> findById(@PathVariable Long id) {
        Optional<Reservation> reservation = reservationService.findById(id);
        return reservation.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<?> save(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.save(reservation));
    }
    @PostMapping("/calendary/{calendaryId}")
    public ResponseEntity<?> saveByCalendary(@PathVariable Long calendaryId, @RequestBody Reservation reservation) {

        Calendary calendary = calendaryService.findById(calendaryId).orElse(null);
        if (calendary == null) {
            return ResponseEntity.notFound().build();
        }
        reservation.setCalendary(calendary);
        Reservation savedReservation = reservationService.save(reservation);
        return ResponseEntity.ok(savedReservation);
    }
    @PostMapping("/calendary/{calendaryId}/client/{clientId}")
    public ResponseEntity<?> saveByCalendaryAndClient(@PathVariable Long calendaryId, @PathVariable Long clientId, @RequestBody Reservation reservation) {

        Calendary calendary = calendaryService.findById(calendaryId).orElse(null);
        if (calendary == null) {
            return ResponseEntity.notFound().build();
        }
        Client client = userService.findById(clientId).orElse(null);
        if (client == null) {
            return ResponseEntity.notFound().build();
        }
        reservation.setCalendary(calendary);
        reservation.setStudent(client);
        Reservation savedReservation = reservationService.save(reservation);
        return ResponseEntity.ok(savedReservation);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Reservation reservation) {
        reservation.setId(id);
        return ResponseEntity.ok(reservationService.update(reservation));
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<?> findByStudent(@PathVariable Long studentId) {
        Client student = userService.findById(studentId).orElse(null);
        if (student != null) {
            List<Reservation> reservations = reservationService.findByStudent(student);
            return ResponseEntity.ok(reservations);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/teacher/{teacherId}")
    public ResponseEntity<?> findByTeacher(@PathVariable Long teacherId) {
        // Buscar al profesor por su ID
        Client teacher = userService.findById(teacherId).orElse(null);
        if (teacher != null) {
            // Si se encuentra el profesor, buscar todas los calendarios asociados a él
            List<Calendary> calendaries = calendaryService.findByTeacher(teacher);

            // Lista para almacenar todas las reservas asociadas a los calendarios
            List<LocalDateTime> reservations = new ArrayList<>();

            // Iterar sobre cada calendario
            for (Calendary calendary : calendaries) {
                // Obtener las reservas asociadas a este calendario
                List<LocalDateTime> reservationsForCalendary = reservationService.findByCalendary(calendary);
                // Agregar las reservas a la lista general de reservas
                reservations.addAll(reservationsForCalendary);
            }

            return ResponseEntity.ok(reservations);
        } else {
            // Si no se encuentra el profesor, devolver una respuesta de error 404
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/calendary/{calendaryId}")
    public ResponseEntity<?> findByCalendary(@PathVariable Long calendaryId) {
        Calendary calendary = calendaryService.findById(calendaryId)
        .orElseThrow(() -> new ResourceNotFoundException("Calendary not found with id " + calendaryId));
        List<LocalDateTime> reservations = reservationService.findByCalendary(calendary);
        return ResponseEntity.ok(reservations);
    }

}
