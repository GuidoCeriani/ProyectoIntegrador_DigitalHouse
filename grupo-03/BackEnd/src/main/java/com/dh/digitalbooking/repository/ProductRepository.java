package com.dh.digitalbooking.repository;

import com.dh.digitalbooking.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {

   List<Product> findAllByCityName(String city);
   List<Product> findAllByCategoryTitle(String category);

   @Query(value = "SELECT p FROM Product p WHERE p.city.name = :name AND p.id NOT IN (SELECT DISTINCT (p.id) FROM Product p JOIN p.reservation re WHERE re.checkIn NOT BETWEEN :checkIn AND :checkOut OR re.checkOut NOT BETWEEN :checkIn AND :checkOut)")
   List<Product> findAllProductByDateAndCity(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut, @Param("name")String name) ;


   @Query(value = "SELECT p FROM Product p WHERE p.id NOT IN (SELECT DISTINCT (p.id) FROM Product p JOIN p.reservation re WHERE re.checkIn NOT BETWEEN :checkIn AND :checkOut OR re.checkOut NOT BETWEEN :checkIn AND :checkOut)")
   List<Product> findAllProductByDate(@Param("checkIn") LocalDate checkIn, @Param("checkOut") LocalDate checkOut);
}
