package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.models.ReservationState;
import com.c1635mjava.Tuprofeenlinea.repository.CalendaryRepository;
import com.c1635mjava.Tuprofeenlinea.repository.ReservationRepository;
import com.c1635mjava.Tuprofeenlinea.service.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements IReservationService {
    @Autowired
    private CalendaryRepository calendaryRepository;
    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Reservation save(Reservation reservation) {

        reservation.setState(ReservationState.IN_PROGRESS);
        return reservationRepository.save(reservation);
    }

    @Override

    public Reservation update(Reservation reservation) {
        Reservation existingReservation = reservationRepository.
                findById(reservation.getId()).orElse(null);
        if (existingReservation != null) {
            existingReservation.setDate(existingReservation.getDate());
            existingReservation.setDuration(existingReservation.getDuration());
            existingReservation.setCalendary(existingReservation.getCalendary());
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

    @Override
    public void markReservationAsFinished(Long id) {
        Optional<Reservation> optionalReservation = reservationRepository.findById(id);
        if (optionalReservation.isPresent()) {
            Reservation reservation = optionalReservation.get();
            reservation.setState(ReservationState.FINISHED); // Actualiza el estado a "FINALIZADA"
            reservationRepository.save(reservation); // Guarda la reserva actualizada
        } else {
            throw new RuntimeException("Reserva no encontrada con ID: " + id);
        }
    }
}

