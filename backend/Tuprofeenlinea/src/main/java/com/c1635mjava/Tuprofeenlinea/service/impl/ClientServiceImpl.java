package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Role;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import java.util.Optional;

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

        client.setEmail(clientDTO.getEmail());
        client.setPassword(clientDTO.getPassword());
        client.setEnabled(true);
        client.setRole(new Role("TEACHER"));
        return client;
    }

    @GetMapping("/{id}")
    public Optional<Client> getClient(@PathVariable Long id) {
        return clientRepository.findById(id);
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }
    
    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }
    @Override
    public Client update(Client client) {
        Client existingClient = clientRepository.
                findById(client.getId()).orElse(null);
        if (existingClient != null) {
            existingClient.setName(client.getName());
            existingClient.setLastname(client.getLastname());
            existingClient.setBirthday(client.getBirthday());
            return clientRepository.save(existingClient);
        } else {
            throw new RuntimeException("Client not found");
        }
    }
    @Override
    public Optional<Client> findById(Long id) {
        return clientRepository.findById(id);
    }
    @Override
    public void deleteById(Long id) {
        clientRepository.deleteById(id);
    }

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    @Override
    public List<Client> findByRole_Rol(String rol) {
        return clientRepository.findByRole_Rol(rol);
    }
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/    
}
