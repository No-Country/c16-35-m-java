package com.c1635mjava.Tuprofeenlinea.service;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;

import java.util.Optional;
import java.util.List;

public interface ICalendaryService {
    public Calendary save(Calendary calendary);
    public Calendary update(Calendary calendary);
    public Optional<Calendary> findById(Long id);
    public void deleteById(Long id);
    List<Calendary> findAll();
    List<Calendary> findByTeacher(Client teacher);
    List<Calendary> findBySubject(String subject);
}
