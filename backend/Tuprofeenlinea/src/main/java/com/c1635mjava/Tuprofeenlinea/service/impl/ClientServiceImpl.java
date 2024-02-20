package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl implements IUserService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }
    
    @Override
    public Client update(Client client) {
        //buscar el Client existente en la base de datos
        Client existingClient = clientRepository.findById(client.getId()).orElse(null);
        if (existingClient != null) {
            existingClient.setName(client.getName());
            existingClient.setLastname(client.getLastname());
            existingClient.setBirthday(client.getBirthday());            
        //guardar el Client actualizado en la base de datos.
            return clientRepository.save(existingClient);
        } else {
            throw new RuntimeException("Client not found");
        }
    }
}
