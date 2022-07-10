package com.dh.digitalbooking.application.controller;


import com.dh.digitalbooking.application.dto.ReserveDTO;
import com.dh.digitalbooking.application.mapper.ReserveMapper;
import com.dh.digitalbooking.model.Reserve;
import com.dh.digitalbooking.service.ReserveService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/reservations")
@RequiredArgsConstructor
public class ReserveController {

    private final ReserveMapper mapper;
    private final ReserveService service;

    Logger logger = LoggerFactory.getLogger(ReserveController.class);



    @Operation(summary = "Create a new reserve")
    @PostMapping
    public ResponseEntity<Void> createReserve(@RequestBody ReserveDTO reserveDTO) {
        Reserve createdReserve = service.addReserve(mapper.toEntity(reserveDTO));
        logger.info("Creating reserve");
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
              .path("/{id}")
              .buildAndExpand(createdReserve.getId())
              .toUri();
        return ResponseEntity.created(uri).build();
    }

    /**
     * @return ResponseEntity<List<ReserveDTO>> Returns a list of reserves by an authenticated user
     */
    @Operation(summary = "Get all reserves by authenticated User", description = "Get all reserves by authenticated User")
    @GetMapping
    public ResponseEntity<List<ReserveDTO>> getListReservesByUser() {
        logger.info("Getting a list of Reserves");
        return ResponseEntity.ok(mapper.toReserveDTOList(service.reservesListByUser ()));
    }

    /**
     * @param id
     * @return ResponseEntity<ReserveDTO> with the reserve with the id passed as parameter
     */
    @Operation(summary = "Get reservation by id")
    @GetMapping(path = "/{id}")
    public ResponseEntity<ReserveDTO> getReserve(@PathVariable UUID id) {
        logger.info("Get reserve id: " + id.toString());
        return ResponseEntity.ok(mapper.toDTO(service.findReserveById(id)));
    }

    @Operation(summary = "Delete reserve by id")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteReserve(@PathVariable UUID id) {
        logger.warn("Deleting reserve id: " + id.toString());
        service.deleteReserve(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");

    }


    /*SOLO ACCESIBLE POR ADMIN*/
    @Operation(summary = "Get all reserves from the database", tags = {"admin"})
    @PreAuthorize ("hasRole('ROLE_ADMIN')")
    @GetMapping("/admin")
    public ResponseEntity<List<ReserveDTO>> getListReserves() {
        logger.info("Getting a list of Reserves");
        return ResponseEntity.ok(mapper.toReserveDTOList (service.reservesList ()));
    }

    @Operation(summary = "Get all reserves from a specific user id", description = "Get all reserves from a specific user id", tags = {"admin"})
    @PreAuthorize ("hasRole('ROLE_ADMIN')")
    @GetMapping("/admin/{id}")
    public ResponseEntity<List<ReserveDTO>> getListReservesByUserId(@PathVariable UUID id) {
        logger.info("Getting a list of Reserves by User id: " + id.toString());
        return ResponseEntity.ok(mapper.toReserveDTOList (service.reservesListByUser (id)));
    }


    @Operation(summary = "Get reserves by product id")
    @PreAuthorize ("hasRole('ROLE_ADMIN')")
    @GetMapping(path = "/admin/product/{productid}")
    public ResponseEntity<List<ReserveDTO>> getReservesByCity(@PathVariable UUID productid) {
        logger.info("Get reserves by product Id: " + productid);
        return ResponseEntity.ok(mapper.toReserveDTOList (service.findReservesByProduct(productid)));
    }


}
