package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Role;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ClientServiceImpl implements IUserService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client save(ClientDTO client) {
        System.out.println("client: " + client);
        return clientRepository.save(createClient(client));
    }

    private Client createClient(ClientDTO clientDTO){
        Client client = new Client();
        Role role = new Role();
        ArrayList<Role> roles = new ArrayList<>();

        role.setRol("ROLE_USER");
        roles.add(role);
        client.setEmail(clientDTO.getEmail());
        client.setPassword(clientDTO.getPassword());
        client.setEnabled(true);
        client.setRoles(roles);
        return client;
    }

}
