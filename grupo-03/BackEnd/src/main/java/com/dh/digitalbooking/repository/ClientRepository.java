package com.dh.digitalbooking.repository;

import com.dh.digitalbooking.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID> {
/*
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
*/
    Optional<Client> findByUserId(UUID email);

}
