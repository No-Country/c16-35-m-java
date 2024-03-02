package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.dtos.ReservationDTO;
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
import java.util.List;

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

    @PostMapping
    public ResponseEntity<?> save(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.save(reservation));
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

    @GetMapping("/calendary/{calendaryId}")
    public ResponseEntity<?> findByCalendary(@PathVariable Long calendaryId) {
    Calendary calendary = calendaryService.findById(calendaryId)
        .orElseThrow(() -> new ResourceNotFoundException("Calendary not found with id " + calendaryId));
    List<Reservation> reservations = reservationService.findByCalendary(calendary);
    return ResponseEntity.ok(reservations);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> createReservation(@RequestBody ReservationDTO reservationDTO) {
        try {
            // Buscar el estudiante en la base de datos
            Client student = userService.findById(reservationDTO.getStudentId()).orElse(null);
            if (student == null) {
                return ResponseEntity.badRequest().body("Student not found");
            }

            // Buscar el profesor en la base de datos
            Client teacher = userService.findById(reservationDTO.getTeacherId()).orElse(null);
            if (teacher == null) {
                return ResponseEntity.badRequest().body("Teacher not found");
            }

            // Crear una nueva reserva utilizando los datos del DTO y los clientes encontrados
            Reservation reservation = new Reservation();
            reservation.setDate(reservationDTO.getDate());
            reservation.setDuration(reservationDTO.getDuration());
            reservation.setStudent(student);

            // Guardar la reserva en la base de datos
            reservationService.save(reservation);

            return ResponseEntity.ok("Reservation created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
