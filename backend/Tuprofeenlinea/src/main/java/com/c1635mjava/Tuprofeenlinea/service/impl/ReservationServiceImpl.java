package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.dtos.ReservationDTO;
import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.repository.ReservationRepository;
import com.c1635mjava.Tuprofeenlinea.service.IReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationServiceImpl implements IReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    @Override
    public Reservation save(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
    @Override
    public Reservation update(Reservation reservation) {
        Reservation existingReservation = reservationRepository.
                findById(reservation.getId()).orElse(null);
        if (existingReservation != null) {
            existingReservation.setDate(existingReservation.getDate());
            existingReservation.setDuration(existingReservation.getDuration());
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
    public List<LocalDateTime> findByCalendary(Calendary calendary) {
    List<Reservation> reservations = reservationRepository.findByCalendary(calendary);
    List<LocalDateTime> datesAndHours = new ArrayList<>();
    for (Reservation res : reservations) {
        datesAndHours.add(res.getDate().atTime(res.getDuration(), 0));
    }
    return datesAndHours;
    }
    @Override
    public void createReservation(ReservationDTO reservationDTO) {

    }
}
