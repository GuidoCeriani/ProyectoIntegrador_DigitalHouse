package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.CityDTO;
import com.dh.digitalbooking.model.City;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CityMapper {

    public City toEntity(CityDTO cityDTO) {
        return new City(cityDTO.getId(),
                        cityDTO.getName(),
                        cityDTO.getProvince(),
                        cityDTO.getCountry());
    }

    public CityDTO toDTO(City city) {
        return new CityDTO(city.getId(),
                           city.getName(),
                           city.getProvince(),
                           city.getCountry());
    }

    public List<CityDTO> toCityDTOList(List<City> cityList) {
        return cityList.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
