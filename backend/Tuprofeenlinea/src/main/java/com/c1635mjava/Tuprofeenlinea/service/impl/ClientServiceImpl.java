package com.c1635mjava.Tuprofeenlinea.service.impl;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.repository.ReservationRepository;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import jakarta.persistence.EntityNotFoundException;
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
        Client client = new Client();
        client.setEmail(clientDTO.getEmail());
        client.setPassword(clientDTO.getPassword());
        client.setEnabled(true);
        return clientRepository.save(client);
    }

    @Override
    public void save(Client existingClient) {
        clientRepository.save(existingClient);
    }
    @Override
    public Client update(Client client) {
        Optional<Client> optionalExistingClient = clientRepository.findById(client.getId());
        if (optionalExistingClient.isPresent()) {
            Client existingClient = optionalExistingClient.get();
            if (client.getEmail() != null) {
                existingClient.setEmail(client.getEmail());
            }
             if (client.getName() != null) {
                existingClient.setName(client.getName());
            }
            if (client.getLastname() != null) {
                existingClient.setLastname(client.getLastname());
            }
            if (client.getBirthday() != null) {
                existingClient.setBirthday(client.getBirthday());
            }
            if (client.getDescriptionBiography() != null) {
                existingClient.setDescriptionBiography(client.getDescriptionBiography());
            }
            if (client.getDescriptionTeacher() != null) {
                existingClient.setDescriptionTeacher(client.getDescriptionTeacher());
            }
            if (client.getImagePath() != null) {
                existingClient.setImagePath(client.getImagePath());
            }

            return clientRepository.save(existingClient);
        } else {
            throw new RuntimeException("Client not found");
        }
    }



    @Override
    public Optional<Client> findById(Long id) {
        return clientRepository.findById(id);
    }
    @Autowired
    private ReservationRepository reservationRepository;


    @Override
    public void deleteById(Long id) {
        Optional<Client> optionalClient = clientRepository.findById(id);
        if (optionalClient.isPresent()) {
            Client client = optionalClient.get();
            // Eliminar las reservas asociadas al cliente
            List<Reservation> reservations = client.getReservationList();
            for (Reservation reservation : reservations) {
                reservationRepository.delete(reservation);
            }

            clientRepository.delete(client);
        } else {
            throw new EntityNotFoundException("Client not found with id: " + id);
        }
    }
}
