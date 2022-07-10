package com.dh.digitalbooking.application.controller;

import com.dh.digitalbooking.application.dto.CategoryDTO;
import com.dh.digitalbooking.application.mapper.CategoryMapper;
import com.dh.digitalbooking.model.Category;
import com.dh.digitalbooking.service.CategoryService;
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
@RequestMapping(path = "/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryMapper mapper;
    private final CategoryService service;

    Logger logger = LoggerFactory.getLogger(CategoryController.class);

    @Operation(summary = "Get category by id")
    @GetMapping(path = "/{id}")
    public ResponseEntity<CategoryDTO> getCategory(@PathVariable UUID id) {
        logger.info("Get category id: " + id.toString());
        return ResponseEntity.ok(mapper.toDTO(service.findCategoryById(id)));
    }

    @Operation(summary = "Create a new category")
    @PostMapping
    public ResponseEntity<Void> createCategory(@RequestBody CategoryDTO categoryDTO) {
        //addCategory debe recibir el dto y retornar el id de la categoría
        Category createdCategory = service.addCategory(mapper.toEntity(categoryDTO));
        logger.info("Creating category");
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                                             .path("/{id}")
                                             .buildAndExpand(createdCategory.getId())
                                             .toUri();
        return ResponseEntity.created(uri).build();
        //mensaje que indique si se creó bien la categoria - Retornar sólo lo que necesita el front
    }

    @Operation(summary = "Delete category by id")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable UUID id) {
        logger.warn("Deleting category id: " + id.toString());
        service.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");

    }

    @Operation(summary = "Update category", description = "Update category")
    @PutMapping
    public ResponseEntity<Void> updateCategory(@RequestBody CategoryDTO categoryDTO) {
        logger.warn("Updating category id:" + categoryDTO.getId());
        service.updateCategory(mapper.toEntity(categoryDTO));
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get all categories", description = "Get all categories")
    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getListCategories() {
        logger.info("Getting a list of Categories");
        return ResponseEntity.ok(mapper.toCategoryDTOList(service.categoryList()));
    }

}
