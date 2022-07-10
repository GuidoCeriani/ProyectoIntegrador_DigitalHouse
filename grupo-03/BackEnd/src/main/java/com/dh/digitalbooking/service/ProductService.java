package com.dh.digitalbooking.service;

import com.dh.digitalbooking.exception.ProductNotFoundException;
import com.dh.digitalbooking.model.Feature;
import com.dh.digitalbooking.model.Policy;
import com.dh.digitalbooking.model.Product;
import com.dh.digitalbooking.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final FeatureService featureService;
    private final PolicyService policyService;

    Logger logger = LogManager.getLogger(ProductService.class);

    public List<Product> productsList() {
        return productRepository.findAll();
    }

    public Product findProductById(UUID id) {
        logger.info("Looking for product id: " + id);
        return productRepository.findById(id)
                                .orElseThrow(() -> new ProductNotFoundException("Product not found for id " + id));
    }

    public Product addProduct(Product product) {
        Policy policy = policyService.addPolicy (product.getPolicy ());
        return productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        findProductById(product.getId());
        return productRepository.save(product);
    }

    @Transactional
    public void addFeature(UUID productId, UUID featureId) {
        Product product = findProductById(productId);
        Feature feature = featureService.findFeatureById(featureId);
        product.getFeatures().add(feature);
        feature.addProduct(product);
    }

    public void deleteProduct(UUID id) throws ProductNotFoundException {

        if (findProductById(id) != null) {
            productRepository.deleteById(id);
            logger.info("Product id " + id + " deleted");
        } else {
            throw new ProductNotFoundException("Product not found for id " + id);
        }
    }

    public List<Product> findProductsByCity(String city) {
        return productRepository.findAllByCityName(city);
    }

    public List<Product> findProductsByCategoryName(String category) {
         return productRepository.findAllByCategoryTitle(category);
    }

    //Filtro por ciudad y fechas
    public List<Product> findProductByDateAndCity(LocalDate checkIn, LocalDate checkOut, String name) {
        return productRepository.findAllProductByDateAndCity(checkIn,checkOut,name);
    }

    //Filtro fechas
    public List<Product> findProductByDate(LocalDate checkIn, LocalDate checkOut) {
        return productRepository.findAllProductByDate(checkIn,checkOut);
    }

    @Transactional
    public void removeFeature(UUID productId, UUID featureId) {
        Product product = findProductById(productId);
        Feature feature = featureService.findFeatureById(featureId);
        product.getFeatures().remove(feature);
        feature.getProductSet().remove(product);
    }
}


