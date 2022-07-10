package com.dh.digitalbooking.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Data
@Table (name = "policy")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Policy implements Serializable {

   @Id
   @Type (type = "uuid-char")
   @GeneratedValue (generator = "UUID")
   @GenericGenerator (
         name = "UUID",
         strategy = "org.hibernate.id.UUIDGenerator")
   private UUID id;
   private String norms;
   private String healthAndSecurity;
   private String cancellationPolicy;


}
