package com.dh.digitalbooking.model;

import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rol {

    @Id
    @Type(type = "uuid-char")
    private UUID id;

    @Enumerated(EnumType.STRING)
    private RolName name;


/*    @OneToMany(fetch = FetchType.LAZY, mappedBy = "rol")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<User> users;*/

    public String getName() {
        return this.name.name();
    }
}
