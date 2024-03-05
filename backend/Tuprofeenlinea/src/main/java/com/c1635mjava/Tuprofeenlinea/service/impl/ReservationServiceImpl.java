package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.models.ReservationState;
import com.c1635mjava.Tuprofeenlinea.repository.CalendaryRepository;
import com.c1635mjava.Tuprofeenlinea.repository.ReservationRepository;
import com.c1635mjava.Tuprofeenlinea.service.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements IReservationService {
    @Autowired
    private CalendaryRepository calendaryRepository;
    @Autowired
    private ReservationRepository reservationRepository;

//    @Override
//    public Reservation save(Reservation reservation) {
//        reservation.setState(ReservationState.IN_PROGRESS);
//        return reservationRepository.save(reservation);
//    }
@Override
public Reservation save(Reservation reservation) {
    if (!reservation.isPayed()) {
        throw new RuntimeException("El pago debe ser realizado antes de crear la reserva.");
        // Alternativamente, puedes devolver null en lugar de lanzar una excepción
        // return null;
    }

    LocalDateTime now = LocalDateTime.now();
    LocalDateTime reservationEndTime = reservation.getDateAndHour();

    if (now.isAfter(reservationEndTime)) {
        reservation.setState(ReservationState.FINISHED);
    } else {
        reservation.setState(ReservationState.IN_PROGRESS);
    }
    return reservationRepository.save(reservation);
}

    @Scheduled(fixedRate = 60000) // Ejecutar cada minuto (ajusta esto según tus necesidades)
    public void updateExpiredReservations() {
        List<Reservation> reservationsInProgress = reservationRepository.findByState(ReservationState.IN_PROGRESS);
        LocalDateTime now = LocalDateTime.now();

        for (Reservation reservation : reservationsInProgress) {
            LocalDateTime reservationEndTime = reservation.getDateAndHour();
            if (now.isAfter(reservationEndTime)) {
                reservation.setState(ReservationState.FINISHED);
                reservationRepository.save(reservation);
            }
        }
    }

    @Override

    public Reservation update(Reservation reservation) {
        Reservation existingReservation = reservationRepository.
                findById(reservation.getId()).orElse(null);
        if (existingReservation != null) {
            existingReservation.setDateAndHour(existingReservation.getDateAndHour());
            existingReservation.setCalendary(existingReservation.getCalendary());
            existingReservation.setState(existingReservation.getState());
            return reservationRepository.save(existingReservation);
        } else {
            throw new RuntimeException("Reservation not found");
        }
    }

    @Override
    public Optional<Reservation> findById(Long id) {
        return reservationRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        reservationRepository.deleteById(id);
    }

    @Override
    public List<Reservation> findAll() {
        return reservationRepository.findAll();
    }

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    @Override
    public List<Reservation> findByStudent(Client student) {
        return reservationRepository.findByStudent(student);
    }

    @Override
    public List<Reservation> findByCalendary(Calendary calendary) {
        return reservationRepository.findByCalendary(calendary);
    }


//    @Override
//    public void markReservationAsFinished(Long id) {
//        Optional<Reservation> optionalReservation = reservationRepository.findById(id);
//        if (optionalReservation.isPresent()) {
//            Reservation reservation = optionalReservation.get();
//            reservation.setState(ReservationState.FINISHED);
//            reservationRepository.save(reservation);
//        } else {
//            throw new RuntimeException("Reserva no encontrada con ID: " + id);
//        }
//    }
}

