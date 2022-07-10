package com.dh.digitalbooking.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;

@Data
@Table(name = "user")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

    @Id
    @Type(type = "uuid-char")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;
/*    private String username;*/
    private String password;
    private String email;

    @ManyToOne
    private Rol rol;


    //Constructor
    public User (
          /*String username, */
          String password, String email, Rol rol) {
/*        this.username = username;*/
        this.password = password;
        this.email = email;
        this.rol = rol;
    }

    public User (String email, String password, boolean nonExpire, boolean nonLocked, boolean credentialNonExpire, boolean isEnabled, List<GrantedAuthority> authorities) {
         this.email = email;
         this.password = password;
    }

    //Gestión de usuarios
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities () {
        SimpleGrantedAuthority grantedauthority = new SimpleGrantedAuthority(rol.getName());
        return Collections.singleton (grantedauthority);
    }

    //retornamos el email como username
    @Override
    public String getUsername () {
        return email;
    }

    @Override
    public boolean isAccountNonExpired () {
        return true;
    }

    @Override
    public boolean isAccountNonLocked () {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired () {
        return true;
    }

    @Override
    public boolean isEnabled () {
        return true;
    }
}
