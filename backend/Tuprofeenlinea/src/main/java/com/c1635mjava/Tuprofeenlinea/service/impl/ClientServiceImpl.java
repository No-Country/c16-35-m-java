package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements IUserService {

    @Autowired
    private PasswordEncoder bcrypt;
    @Autowired
    private ClientRepository clientRepository;
    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }
    @Override
    public Client save(Client client) {
    
        client.setPassword(bcrypt.encode(client.getPassword()));
        client.setRole("student");
        client.setEnabled(true);
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
            existingClient.setDescriptionTeacher(client.getDescriptionTeacher());
            existingClient.setDescriptionBiography(client.getDescriptionBiography());
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
    public List<Client> findByRole(String role) {
        return clientRepository.findByRole(role);
    }
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
}
