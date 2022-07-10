package com.dh.digitalbooking.application.controller;

import com.dh.digitalbooking.application.dto.FeatureDTO;
import com.dh.digitalbooking.application.mapper.FeatureMapper;
import com.dh.digitalbooking.model.Feature;
import com.dh.digitalbooking.service.FeatureService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/features")
@RequiredArgsConstructor
public class FeatureController {

    @Autowired
    private final FeatureMapper mapper;
    @Autowired
    private final FeatureService service;

    Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Operation(summary = "Get feature by id")
    @GetMapping(path = "/{id}")
    public ResponseEntity<FeatureDTO> getFeature(@PathVariable UUID id) {
        logger.info("Get feature id: " + id.toString());
        return ResponseEntity.ok(mapper.toDTO(service.findFeatureById(id)));
    }

    @Operation(summary = "Create a new feature")
    @PostMapping
    public ResponseEntity<Void> createFeature(@RequestBody FeatureDTO featureDTO) {
        Feature createdFeature = service.addFeature(mapper.toEntity(featureDTO));
        logger.info("Creating feature");
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                                             .path("/{id}")
                                             .buildAndExpand(createdFeature.getId())
                                             .toUri();
        return ResponseEntity.created(uri).build();
    }

    @Operation(summary = "Delete feature by id")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteFeature(@PathVariable UUID id) {
        logger.warn("Deleting feature id: " + id.toString());
        service.deleteFeature(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");

    }

    @Operation(summary = "Update feature", description = "Update feature")
    @PutMapping
    public ResponseEntity<Void> updateFeature(@RequestBody FeatureDTO featureDTO) {
        logger.warn("Updating feature id:" + featureDTO.getId());
        service.updateFeature(mapper.toEntity(featureDTO));
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get all features", description = "Get all features")
    @GetMapping
    public ResponseEntity<List<FeatureDTO>> getListFeatures() {
        logger.info("Getting a list of Features");
        return ResponseEntity.ok(mapper.toFeaturesDTOList(service.featuresList()));
    }
}
