package com.dh.digitalbooking.repository;

import com.dh.digitalbooking.model.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReserveRepository extends JpaRepository<Reserve, UUID> {

   List<Reserve> findByProductId (UUID productId);
   List<Reserve> findByUserId (UUID userId);
}
