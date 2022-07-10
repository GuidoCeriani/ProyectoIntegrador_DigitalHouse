package com.dh.digitalbooking.application.controller;


import com.dh.digitalbooking.application.dto.ProductDTO;
import com.dh.digitalbooking.application.mapper.ProductMapper;
import com.dh.digitalbooking.model.Product;
import com.dh.digitalbooking.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductMapper mapper;
    private final ProductService service;

    Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Operation(summary = "Get product by id")
    @GetMapping(path = "/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable UUID id) {
        logger.info("Get product id: " + id.toString());
        return ResponseEntity.ok(mapper.toDTO(service.findProductById(id)));
    }

    @Operation(summary = "Get products by city")
    @GetMapping(params = {"city"})
    public ResponseEntity<List<ProductDTO>> getProductsByCity(@RequestParam String city) {
        logger.info("Get products by city: " + city);
        return ResponseEntity.ok(mapper.toDTOS(service.findProductsByCity(city)));
    }

    @Operation(summary = "Get products by category")
    @GetMapping(params = {"category"})
    public ResponseEntity<List<ProductDTO>> getProductsByCategory(@RequestParam String category) {
        logger.info("Get products by category: " + category);
        return ResponseEntity.ok(mapper.toDTOS(service.findProductsByCategoryName (category)));
    }

    @Operation(summary = "Get products availables by checkIn, checkOut and city")
    @GetMapping(params = {"checkIn", "checkOut", "name"})
    public ResponseEntity<List<ProductDTO>> getProductByCityAndDate(
          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut,
          @RequestParam String name) {

        return ResponseEntity.ok(mapper.toDTOS(service.findProductByDateAndCity(checkIn,checkOut,name)));
    }

    @Operation(summary = "Get products availables by checkIn, checkOut and city")
    @GetMapping(params = {"checkIn", "checkOut"})
    public ResponseEntity<List<ProductDTO>> getProductByDate(
          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn,
          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut) {

        return ResponseEntity.ok(mapper.toDTOS(service.findProductByDate(checkIn,checkOut)));
    }


    @Operation(summary = "Create a new product")
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody ProductDTO productDTO) {
        Product createdProduct = service.addProduct(mapper.toEntity(productDTO));
        logger.info("Creating product");
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                                             .path("/{id}")
                                             .buildAndExpand(createdProduct.getId())
                                             .toUri();
        ResponseEntity.created (uri).build();
/*        return ResponseEntity.created(uri).build();*/
        return ResponseEntity.ok (createdProduct);
    }

    @PatchMapping(path = "/{productId}/link/{featureId}")
    public ResponseEntity<Void> setFeature(@PathVariable UUID productId, @PathVariable UUID featureId) {
        service.addFeature(productId, featureId);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping(path = "/{productId}/unlink/{featureId}")
    public ResponseEntity<Void> removeFeature(@PathVariable UUID productId, @PathVariable UUID featureId) {
        service.removeFeature(productId, featureId);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Delete product by id")
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable UUID id) {
        logger.warn("Deleting product id: " + id.toString());
        service.deleteProduct(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Deleted");
    }

    @Operation(summary = "Update product", description = "Update product")
    @PutMapping
    public ResponseEntity<Void> updateProduct(@RequestBody ProductDTO productDTO) {
        logger.warn("Updating product id:" + productDTO.getId());
        service.updateProduct(mapper.toEntity(productDTO));
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get all products", description = "Get all products")
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getListProducts() {
        logger.info("Getting a list of Products");
        return ResponseEntity.ok(mapper.toDTOS (service.productsList()));
    }
}
