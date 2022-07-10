package com.dh.digitalbooking.exception;

public class ReserveNotFoundException extends RuntimeException {
    public ReserveNotFoundException (String message) {
        super(message);
    }
}
