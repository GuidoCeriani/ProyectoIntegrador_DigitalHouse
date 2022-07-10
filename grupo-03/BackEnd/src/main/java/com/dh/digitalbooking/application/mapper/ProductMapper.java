package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.ProductDTO;
import com.dh.digitalbooking.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ProductMapper {

    private final CityMapper cityMapper;
    private final CategoryMapper categoryMapper;
    private final ImageMapper imageMapper;
    private final FeatureMapper featureMapper;
    private final ReserveMapper reserveMapper;
    private final PolicyMapper policyMapper;

    public Product toEntity(ProductDTO productDTO) {
        return new Product(productDTO.getId(),
                           productDTO.getTitle(),
                           productDTO.getDescription_title(),
                           productDTO.getDescription(),
                           productDTO.getAddress (),
                           productDTO.getAvailability(),
                           policyMapper.toEntity(productDTO.getPolicyDTO ()),
                           cityMapper.toEntity(productDTO.getCityDTO()),
                           categoryMapper.toEntity(productDTO.getCategoryDTO()),
                           productDTO.getImageDTOS().stream().map(imageMapper::toEntity).collect(Collectors.toSet()),
                           productDTO.getFeatureDTOS().stream().map(featureMapper::toEntity).collect(Collectors.toSet()),
                           productDTO.getReserveDTOS().stream().map(reserveMapper::toEntity).collect(Collectors.toSet()));
    }

    public ProductDTO toDTO(Product product) {
        return new ProductDTO(product.getId(),
                              product.getTitle(),
                              product.getDescription_title(),
                              product.getDescription(),
                              product.getAddress (),
                              product.getAvailability(),
                              policyMapper.toDTO(product.getPolicy()),
                              cityMapper.toDTO(product.getCity()),
                              categoryMapper.toDTO(product.getCategory()),
                              product.getImages().stream().map(imageMapper::toDTO).collect(Collectors.toSet()),
                              product.getFeatures().stream().map(featureMapper::toDTO).collect(Collectors.toSet()),
                              product.getReservation().stream().map(reserveMapper::toDTO).collect(Collectors.toSet()));
    }


    public List<ProductDTO> toDTOS(List<Product> products) {
        return products.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
