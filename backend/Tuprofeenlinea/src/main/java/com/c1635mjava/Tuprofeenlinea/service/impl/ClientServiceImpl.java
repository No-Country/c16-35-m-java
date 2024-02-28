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
    public Client update(Client client) {

        Optional<Client> optionalExistingClient = clientRepository.findById(client.getId());
        if (optionalExistingClient.isPresent()) {Client existingClient = optionalExistingClient.get();

            existingClient.setName(client.getName());
            existingClient.setLastname(client.getLastname());
            existingClient.setBirthday(client.getBirthday());
            existingClient.setDescriptionBiography(client.getDescriptionBiography());
            existingClient.setDescriptionTeacher(client.getDescriptionTeacher());

             existingClient.setRole(client.getRole());
            // Guardar los cambios en la base de datos
            return clientRepository.save(existingClient);
        } else {
            // Si no se encuentra el cliente, lanzar una excepción
            throw new RuntimeException("Client not found");
        }
    }

    @Override
    public Optional<Client> findById(Long id) {
        return clientRepository.findById(id);
    }
    @Autowired
    private ReservationRepository reservationRepository;
//    @Override
//    public void deleteById(Long id) {
//        clientRepository.deleteById(id);
//    }

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
