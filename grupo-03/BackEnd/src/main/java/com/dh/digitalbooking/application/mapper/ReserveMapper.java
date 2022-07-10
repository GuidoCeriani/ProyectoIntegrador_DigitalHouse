package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.ReserveDTO;
import com.dh.digitalbooking.model.Product;
import com.dh.digitalbooking.model.Reserve;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class ReserveMapper {

    private final UserMapper userMapper;

    public Reserve toEntity (ReserveDTO reserveDTO) {
        return new Reserve (reserveDTO.getId ()
              , null
              , reserveDTO.getCheckIn ()
              , reserveDTO.getCheckOut ()
              , new Product(reserveDTO.getProductId())
              , null);
    }

    public ReserveDTO toDTO (Reserve reserve) {
        return new ReserveDTO (reserve.getId (), reserve.getCheckIn (), reserve.getCheckOut (), reserve.getProduct().getId());

    }

    public List<ReserveDTO> toReserveDTOList (List<Reserve> reserveList) {
        return reserveList.stream ().map (this::toDTO).collect (Collectors.toList ());
    }

    public List<Reserve> toReserveList (List<ReserveDTO> reserveDTOList) {
        return reserveDTOList.stream ().map (this::toEntity).collect (Collectors.toList ());
    }
}