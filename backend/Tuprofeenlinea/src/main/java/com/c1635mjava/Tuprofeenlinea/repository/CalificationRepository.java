package com.c1635mjava.Tuprofeenlinea.repository;

import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalificationRepository extends JpaRepository<Calification, Long> {
}

