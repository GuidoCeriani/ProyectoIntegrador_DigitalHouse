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
public class PolicyDTO {

    @NotNull
    private UUID id;
    private String norms;
    private String healthAndSecurity;
    private String cancellationPolicy;
}
