package com.dh.digitalbooking.security.dto;

import com.dh.digitalbooking.model.Rol;
import com.dh.digitalbooking.model.RolName;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.FieldDefaults;

import java.util.UUID;

@Data
@AllArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthenticationDTOResponse {

   private UUID id;
   private Rol role;
   private String name;
   private String surname;
   private String email;
   private String city;
   String jwt;

   public AuthenticationDTOResponse (String jwt) {
      this.jwt = jwt;
   }

   public AuthenticationDTOResponse (UUID id, String name, String surname, String email, Rol rol, String jwt) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.role = rol;
      this.jwt = jwt;
   }
}
