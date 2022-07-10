package com.dh.digitalbooking.application.controller;

import com.dh.digitalbooking.application.dto.ImageDTO;
import com.dh.digitalbooking.application.mapper.ImageMapper;
import com.dh.digitalbooking.model.Image;
import com.dh.digitalbooking.service.ImageService;
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
@RequestMapping(path = "/images")
@RequiredArgsConstructor
public class ImageController {

    private final ImageMapper mapper;
    private final ImageService service;

    Logger logger = LoggerFactory.getLogger(ImageController.class);

    @Operation(summary = "Create a new image")
    @PostMapping
    public ResponseEntity<Void> createImage(@RequestBody ImageDTO imageDTO) {
        Image createdImage = service.addImage(mapper.toEntity(imageDTO));
        logger.info("Creating image");
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                                             .path("/{id}")
                                             .buildAndExpand(createdImage.getId())
                                             .toUri();
        return ResponseEntity.created(uri).build();
    }

    @Operation(summary = "Update image", description = "Update image")
    @PutMapping
    public ResponseEntity<Void> updateImage(@RequestBody ImageDTO imageDTO) {
        logger.warn("Updating image id:" + imageDTO.getId());
        service.updateImage(mapper.toEntity(imageDTO));
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get image by id")
    @GetMapping(path = "/{id}")
    public ResponseEntity<ImageDTO> getImage(@PathVariable UUID id) {
        logger.info("Get image id: " + id.toString());
        return ResponseEntity.ok(mapper.toDTO(service.findImageById(id)));
    }

    @Operation(summary = "Get all images", description = "Get all images")
    @GetMapping
    public ResponseEntity<List<ImageDTO>> getListImages() {
        logger.info("Getting a list of Images");
        return ResponseEntity.ok(mapper.toImageDTOList(service.imageList()));
    }

    @Operation(summary = "Delete image by id")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable UUID id) {
        logger.warn("Deleting image id: " + id.toString());
        service.deleteImage(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");

    }
}
