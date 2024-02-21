package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.models.Calification;
import com.c1635mjava.Tuprofeenlinea.repository.CalificationRepository;
import com.c1635mjava.Tuprofeenlinea.service.ICalificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalificationServiceImpl implements ICalificationService {

    @Autowired
    private CalificationRepository calificationRepository;

    @Override
    public Calification save(Calification calification) {
        return calificationRepository.save(calification);
    }
    
    @Override
    public Calification update(Calification calification) {
        Calification existingcalification = calificationRepository.findById(calification.getId()).orElse(null);
        if (existingcalification != null) {
            existingcalification.setClarity(calification.getClarity());
            existingcalification.setPunctuality(calification.getPunctuality());
            existingcalification.setPreparation(calification.getPreparation());
            existingcalification.setComment(calification.getComment());
            return calificationRepository.save(existingcalification);
        } else {
            throw new RuntimeException("calification not found");
        }
    }
}
