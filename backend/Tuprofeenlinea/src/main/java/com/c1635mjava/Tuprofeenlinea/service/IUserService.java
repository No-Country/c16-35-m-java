package com.c1635mjava.Tuprofeenlinea.service;

import com.c1635mjava.Tuprofeenlinea.dtos.ClientDTO;
import com.c1635mjava.Tuprofeenlinea.models.Client;

public interface IUserService {

    public Client save(ClientDTO client);
}
