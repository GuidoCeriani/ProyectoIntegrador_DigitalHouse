package com.dh.digitalbooking.service;


import com.dh.digitalbooking.exception.CityNotFoundException;
import com.dh.digitalbooking.model.City;
import com.dh.digitalbooking.repository.CityRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CityService {
   private final CityRepository cityRepository;
   private final ProductService productService;

   @Autowired
   public CityService (CityRepository cityRepository, ProductService productService) {
      this.cityRepository = cityRepository;
      this.productService = productService;
   }


   Logger logger = LogManager.getLogger (CityService.class);

   public City addCity (City city) {
      return cityRepository.save (city);
   }

   public City updateCity (City city) {
      findCityById (city.getId ());
      return cityRepository.save (city);
   }

   public List<City> cityList () {
      return cityRepository.findAll ();
   }

   public City findCityById (UUID id) {
      logger.info ("Looking for city id: " + id);
      return cityRepository.findById (id).orElseThrow (() -> new CityNotFoundException ("City not found for id " + id));
   }

   public void deleteCity (UUID id) throws CityNotFoundException {
      City city = findCityById (id);
      if (city != null) {
         //TODO agregar validación de que la ciudad no esté asociada a ningún producto
         if (productService.findProductsByCity (city.getName ()).isEmpty ()) {
            cityRepository.deleteById (id);
            logger.info ("City id " + id + " deleted");
         } else {
            throw new CityNotFoundException ("Cannot deleted this city, it is associated with a product. City Id " + id);
         }
      } else {
      throw new CityNotFoundException ("City not found for id " + id);
   }
}
}
