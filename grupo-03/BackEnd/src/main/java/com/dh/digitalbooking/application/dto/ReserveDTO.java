package com.dh.digitalbooking.application.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReserveDTO {

    @NotNull
    private UUID id;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private UUID productId;

}
