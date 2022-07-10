package com.dh.digitalbooking.application.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.apache.commons.lang3.builder.HashCodeExclude;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ImageDTO {

    private UUID id;
    @NotNull
    private String title;
    private String url;

    @ToString.Exclude
    @HashCodeExclude
    private ProductDTO productDTO;  //sólo id productDTO 

    @JsonIgnore
    public ProductDTO getProductDTO() {
        return productDTO;
    }

    @JsonProperty("productDTO")
    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }
}
