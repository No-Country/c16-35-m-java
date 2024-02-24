package com.c1635mjava.Tuprofeenlinea.repository;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CalendaryRepository extends JpaRepository<Calendary, Long> {
    List<Calendary> findByTeacher(Client teacher);
    List<Calendary> findBySubject(String subject);
}