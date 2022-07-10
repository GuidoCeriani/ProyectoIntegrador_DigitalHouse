package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.FeatureDTO;
import com.dh.digitalbooking.model.Feature;
import com.dh.digitalbooking.model.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class FeatureMapper {

    public Feature toEntity(FeatureDTO featureDTO) {
        return new Feature(featureDTO.getId(),
                           featureDTO.getName(),
                           featureDTO.getProductDTOS().stream().map(dto -> new Product(dto.getId())).collect(Collectors.toSet())
        );
    }

    public FeatureDTO toDTO(Feature feature) {
        return new FeatureDTO(feature.getId(),
                              feature.getName(),
                              null
        );
    }

    public List<FeatureDTO> toFeaturesDTOList(List<Feature> featureList) {
        return featureList.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
