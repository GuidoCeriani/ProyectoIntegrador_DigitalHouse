package com.dh.digitalbooking.application.dto;

import com.dh.digitalbooking.model.Rol;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRegistryDTO {

    /*
    mapperUserRegistry, esto es un DTO para registrar un usuario que requiere datos de User y Client
    La idea de éste DTO es que el front haga una llamada a la API
    El username en realidad es el email
     */

    private String name;
    private String surname;
    private String email;
    private String password;
    private Rol rol;

}
