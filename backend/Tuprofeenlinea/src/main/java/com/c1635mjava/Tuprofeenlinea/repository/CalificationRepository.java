package com.c1635mjava.Tuprofeenlinea.repository;

import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CalificationRepository extends JpaRepository<Calification, Long> {
    List<Calification> findByReservation(Reservation reservation);
}