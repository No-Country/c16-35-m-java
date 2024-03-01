package com.c1635mjava.Tuprofeenlinea.service;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    Client save(ClientDTO clientDTO);
    Client update(Client client);
    Optional<Client> findById(Long id);
    void deleteById(Long id);
    List<Client> findAll();

    void save(Client existingClient);

}
