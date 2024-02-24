package com.c1635mjava.Tuprofeenlinea.service;

import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import java.util.List;
import java.util.Optional;

public interface ICalificationService {

    public Calification save(Calification calification);
    public Calification update(Calification calification);
    Optional<Calification> findById(Long id);
    void deleteById(Long id);
    List<Calification> findAll();
    List<Calification> findByReservation(Reservation reservation);
}

