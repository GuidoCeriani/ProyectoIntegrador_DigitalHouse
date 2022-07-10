package com.dh.digitalbooking.application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.Set;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    @NotNull
    private UUID id;
    private String title;
    private String description_title;
    private String description;
    private String address;
    private String availability;

    private PolicyDTO policyDTO;

    private CityDTO cityDTO;

    private CategoryDTO categoryDTO;

    private Set<ImageDTO> imageDTOS;

    private Set<FeatureDTO> featureDTOS;

    private Set<ReserveDTO> reserveDTOS;

}
