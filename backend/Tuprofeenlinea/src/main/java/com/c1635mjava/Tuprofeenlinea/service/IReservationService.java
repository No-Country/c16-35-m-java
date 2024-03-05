package com.c1635mjava.Tuprofeenlinea.service;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface IReservationService {

    Reservation save(Reservation reservation);
    Reservation update(Reservation reservation);
    Optional<Reservation> findById(Long id);
    void deleteById(Long id);
    List<Reservation> findAll();

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    List<Reservation> findByStudent(Client student);
    List<Reservation> findByTeacher(Client teacher);
    List<LocalDateTime> findByCalendary(Calendary calendary);
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

}
