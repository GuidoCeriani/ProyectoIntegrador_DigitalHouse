package com.dh.digitalbooking.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Data
@Table (name = "clients")
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Client implements Serializable {

   @Id
   @Type (type = "uuid-char")
   @GeneratedValue (generator = "UUID")
   @GenericGenerator (
         name = "UUID",
         strategy = "org.hibernate.id.UUIDGenerator")
   private UUID id;
   private String name;
   private String surname;
   private String city;

   @OneToOne
   private User user;


   /*TODO creo que se puede sacar este Set, ya que es posible acceder a las reservas del usuario desde la tabla reservation que guarda el id del user asociado al cliente*/
/*   @OneToMany ( cascade = CascadeType.ALL, mappedBy = "user")
   @ToString.Exclude
   @EqualsAndHashCode.Exclude
   private Set<Reserve> reservations = new HashSet<> ();

   public void addReserve(Reserve reserve) {
      this.reservations.add(reserve);
   }*/


}
