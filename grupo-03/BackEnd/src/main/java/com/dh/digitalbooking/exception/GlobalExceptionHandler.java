package com.dh.digitalbooking.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(CategoryNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleCategoryNotFoundException(CategoryNotFoundException exception){
      return exception.getMessage();
    }

    @ExceptionHandler(ProductNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleProductNotFoundException(ProductNotFoundException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(CityNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleCityNotFoundException(CityNotFoundException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(FeatureNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleFeatureNotFoundException(FeatureNotFoundException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(ImageNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleImageNotFoundException(ImageNotFoundException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(ReserveNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleReserveNotFoundException(ReserveNotFoundException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(ClientNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleClientNotFoundException(ClientNotFoundException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(EmailAlreadyRegisteredException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handleEmailNotFoundException(EmailAlreadyRegisteredException exception){
        return exception.getMessage();
    }

    @ExceptionHandler(PolicyNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String handlePolicyNotFoundException(PolicyNotFoundException exception){
        return exception.getMessage();
    }


}