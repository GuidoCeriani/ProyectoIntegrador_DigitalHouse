package com.dh.digitalbooking.exception;

public class PolicyNotFoundException extends RuntimeException {
    public PolicyNotFoundException (String message) {
        super(message);
    }
}
