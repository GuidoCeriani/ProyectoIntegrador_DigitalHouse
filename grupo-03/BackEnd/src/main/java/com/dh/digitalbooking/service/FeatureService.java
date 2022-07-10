package com.dh.digitalbooking.service;


import com.dh.digitalbooking.exception.FeatureNotFoundException;
import com.dh.digitalbooking.model.Feature;
import com.dh.digitalbooking.model.Product;
import com.dh.digitalbooking.repository.FeatureRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class FeatureService {
    private final FeatureRepository featureRepository;

    @Autowired
    public FeatureService(FeatureRepository featureRepository) {
        this.featureRepository = featureRepository;
    }

    Logger logger = LogManager.getLogger(FeatureRepository.class);

    public List<Feature> featuresList() {
        return featureRepository.findAll();
    }

    public Feature findFeatureById(UUID id) {
        logger.info("Looking for feature id: " + id);
        return featureRepository.findById(id)
                                .orElseThrow(() -> new FeatureNotFoundException("Feature not found for id " + id));
    }

    public Feature addFeature(Feature feature) {
        //TODO: check if feature already exists
        return featureRepository.save(feature);
    }

    public Feature updateFeature(Feature feature) {
        findFeatureById(feature.getId());
        return featureRepository.save(feature);
    }

    public void deleteFeature(UUID id) throws FeatureNotFoundException {
        if (findFeatureById(id) != null) {

            //deberiamos recorrer los productos y verificar que la feature no esté siendo usada en ninguno antes de eliminarla
/*            List<Product> listProducts = productService.productsList ();
            for (Product product : listProducts) {
                if (product.getFeatures().contains(findFeatureById(id))) {
                    throw new FeatureNotFoundException("The feature cannot be deleted because it is associated with a product");
                }
            }*/

            featureRepository.deleteById(id);
            logger.info("Feature id " + id + " deleted");

        } else {
            throw new FeatureNotFoundException("Feature not found for id " + id);
        }
    }

}
