package com.dh.digitalbooking.application.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CityDTO {

    @NotNull
    private UUID id;
    @NotNull
    private String name;
    private String province;
    private String country;

}
