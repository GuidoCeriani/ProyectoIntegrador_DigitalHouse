package com.dh.digitalbooking.application.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.apache.commons.lang3.builder.HashCodeExclude;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeatureDTO {

    @NotNull
    private UUID id;
    private String name;

    @JsonIgnore
    @ToString.Exclude
    @HashCodeExclude
    private Set<ProductDTO> productDTOS = new HashSet<>();
}
