package com.dh.digitalbooking.repository;

import com.dh.digitalbooking.model.Rol;
import com.dh.digitalbooking.model.RolName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RolRepository extends JpaRepository<Rol, UUID> {

    Rol findByName(RolName rolName);

}
