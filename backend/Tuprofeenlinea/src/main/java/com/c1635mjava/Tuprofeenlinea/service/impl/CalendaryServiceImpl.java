package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.CalendaryRepository;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.service.ICalendaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Service
public class CalendaryServiceImpl implements ICalendaryService {

    @Autowired
    private CalendaryRepository calendaryRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public List<Calendary> findAll() {
        return calendaryRepository.findAll();
    }
    @Override
    public Calendary save(Calendary calendary) {
        Authentication authentication;
        authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Client teacher;
        teacher = clientRepository.findByEmail(userDetails.getUsername());
        teacher.setRole("teacher");
        calendary.setTeacher(teacher);
        return calendaryRepository.save(calendary);
    }
    @Override
    public Calendary update(Calendary calendary) {
        Calendary existingCalendary = calendaryRepository.
                findById(calendary.getId()).orElse(null);
        if (existingCalendary != null) {
            existingCalendary.setSubject(calendary.getSubject());
            existingCalendary.setStartDate(calendary.getStartDate());
            existingCalendary.setEndDate(calendary.getEndDate());
            existingCalendary.setStartHour(calendary.getStartHour());
            existingCalendary.setEndHour(calendary.getEndHour());
            existingCalendary.setDescriptionCurse(calendary.getDescriptionCurse());
            existingCalendary.setPrice(calendary.getPrice());
            return calendaryRepository.save(existingCalendary);
        } else {
            throw new RuntimeException("Calendary not found");
        }
    }
    @Override
    public Optional<Calendary> findById(Long id) {
        return calendaryRepository.findById(id);
    }
    @Override
    public void deleteById(Long id) {
        calendaryRepository.deleteById(id);
    }
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    @Override
    public List<Calendary> findByTeacher(Client teacher) {
        return calendaryRepository.findByTeacher(teacher);
    }
    @Override
    public List<Calendary> findBySubject(String subject) {
        return calendaryRepository.findBySubject(subject);
    }
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
}
