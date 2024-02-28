package com.c1635mjava.Tuprofeenlinea.controller;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.service.IUploadFileService;
import com.c1635mjava.Tuprofeenlinea.service.IUserService;
import io.jsonwebtoken.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    private PasswordEncoder bcrypt;

    @Autowired
    private IUserService userService;

    @Autowired
    private IUploadFileService uploadFileService;

    @GetMapping
    public ResponseEntity<List<Client>> findAll() {
        List<Client> clients = userService.findAll();
        return ResponseEntity.ok(clients);
    }

    @PostMapping
    public ResponseEntity<Client> save(@RequestBody ClientDTO clientDTO) {
        clientDTO.setPassword(bcrypt.encode(clientDTO.getPassword()));
        Client savedClient = userService.save(clientDTO);
        return ResponseEntity.ok(savedClient);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Client> update(@PathVariable Long id, @RequestBody Client client, @RequestParam(value = "profileImage", required = false) MultipartFile profileImage) {
        Optional<Client> optionalClient = userService.findById(id);
        if (!optionalClient.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Client existingClient = optionalClient.get();

        existingClient.setName(client.getName());
        existingClient.setLastname(client.getLastname());
        existingClient.setBirthday(client.getBirthday());
        existingClient.setDescriptionTeacher(client.getDescriptionTeacher());
        existingClient.setDescriptionBiography(client.getDescriptionBiography());

        // Verificar si se proporcionó una nueva imagen y guardarla si es necesario
        if (profileImage != null && !profileImage.isEmpty()) {
            try {
                String uniqueFileName = uploadFileService.copy(profileImage);
                System.out.println("Ruta : "+ uniqueFileName );
                // Asignar la ruta de la nueva imagen al cliente
                existingClient.setImagePath(uniqueFileName);
            } catch (IOException | java.io.IOException e) {
                e.printStackTrace();
                // Manejar el error en caso de que falle la carga de la imagen
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        }
        Client savedClient = userService.update(existingClient);
        return ResponseEntity.ok(savedClient);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> findById(@PathVariable Long id) {
        Optional<Client> client = userService.findById(id);
        return client.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}