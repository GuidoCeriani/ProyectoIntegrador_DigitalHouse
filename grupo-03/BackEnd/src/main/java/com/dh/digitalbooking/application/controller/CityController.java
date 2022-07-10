package com.dh.digitalbooking.application.controller;

import com.dh.digitalbooking.application.dto.CityDTO;
import com.dh.digitalbooking.application.mapper.CityMapper;
import com.dh.digitalbooking.model.City;
import com.dh.digitalbooking.service.CityService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/cities")
@RequiredArgsConstructor
public class CityController {

    private final CityMapper mapper;
    private final CityService service;

    Logger logger = LoggerFactory.getLogger(CityController.class);

    @Operation(summary = "Create a new city")
    @PostMapping
    public ResponseEntity<Void> createCity(@RequestBody CityDTO cityDTO) {
        City createdCity = service.addCity(mapper.toEntity(cityDTO));
        logger.info("Creating city");
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                                             .path("/{id}")
                                             .buildAndExpand(createdCity.getId())
                                             .toUri();
        return ResponseEntity.created(uri).build();
    }

    @Operation(summary = "Update city", description = "Update city")
    @PutMapping
    public ResponseEntity<Void> updateCity(@RequestBody CityDTO cityDTO) {
        logger.warn("Updating city id:" + cityDTO.getId());
        service.updateCity(mapper.toEntity(cityDTO));
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get city by id")
    @GetMapping(path = "/{id}")
    public ResponseEntity<CityDTO> getCity(@PathVariable UUID id) {
        logger.info("Get city id: " + id.toString());
        return ResponseEntity.ok(mapper.toDTO(service.findCityById(id)));
    }

    @Operation(summary = "Get all cities", description = "Get all cities")
    @GetMapping
    public ResponseEntity<List<CityDTO>> getListCities() {
        logger.info("Getting a list of Cities");
        return ResponseEntity.ok(mapper.toCityDTOList(service.cityList()));
    }

    @Operation(summary = "Delete city by id")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteCity(@PathVariable UUID id) {
        logger.warn("Deleting city id: " + id.toString());
        service.deleteCity(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");

    }

}
