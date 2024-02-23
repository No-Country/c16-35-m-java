package com.c1635mjava.Tuprofeenlinea.repository;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Client findByEmail(String email);
}

