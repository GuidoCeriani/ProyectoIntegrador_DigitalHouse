package com.dh.digitalbooking.repository;

import com.dh.digitalbooking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Repository
//@Transactional(readOnly = true) // readOnly = true: no transaction is created
public interface UserRepository extends JpaRepository<User, UUID> {

/*    Optional<User> findByUsername(String username);*/

    Optional<User> findByEmail(String email);

}
