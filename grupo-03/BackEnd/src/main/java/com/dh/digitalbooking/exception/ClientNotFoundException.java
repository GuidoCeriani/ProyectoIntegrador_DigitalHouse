package com.dh.digitalbooking.exception;

public class ClientNotFoundException extends RuntimeException {
    public ClientNotFoundException (String message) {
        super(message);
    }

}
