package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Role;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements IUserService {

    @Autowired
    private ClientRepository clientRepository;
    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }
    @Override
    public Client save(ClientDTO clientDTO) {
        System.out.println("client: " + clientDTO);
        Client client = convertToClient(clientDTO);
        return clientRepository.save(client);
    }

    private Client convertToClient(ClientDTO clientDTO) {
        Client client = new Client();
        // Copia los atributos de clientDTO a client
        client.setEmail(clientDTO.getEmail());
        client.setPassword(clientDTO.getPassword());
        client.setEnabled(true);
        client.setRole(new Role("TEACHER"));
        return client;
    }



    private Client createClient(Client clientDTO){
        Client client = new Client();

        client.setEmail(clientDTO.getEmail());
        client.setPassword(clientDTO.getPassword());
        client.setEnabled(true);
        client.setRole(new Role("TEACHER"));
        return client;
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

//    @Override
//    public Optional<Client> findById(Long id) {
//        return Optional.empty();
//    }

        @Override
    public Optional<Client> findById(Long id) {
        return clientRepository.findById(id);
    }
    @Override
    public void deleteById(Long id) {
        clientRepository.deleteById(id);
    }
}

