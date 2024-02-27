package com.c1635mjava.Tuprofeenlinea.repository;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    Client findByEmail(String email);

    List<Client> findByRole(String role);
}