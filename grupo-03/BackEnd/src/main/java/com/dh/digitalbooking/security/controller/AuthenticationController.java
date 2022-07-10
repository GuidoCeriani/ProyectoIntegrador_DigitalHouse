package com.dh.digitalbooking.security.controller;

import com.dh.digitalbooking.security.dto.AuthenticationDTORequest;
import com.dh.digitalbooking.security.dto.AuthenticationDTOResponse;
import com.dh.digitalbooking.security.service.JwtService;
import com.dh.digitalbooking.model.Client;
import com.dh.digitalbooking.model.User;
import com.dh.digitalbooking.repository.ClientRepository;
import com.dh.digitalbooking.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AuthenticationController {

    Logger logger = LoggerFactory.getLogger (AuthenticationController.class);

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private final UserDetailsService userDetailsService;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ClientRepository clientRepository;


    @Operation (summary = "Authenticate a user", description = "Authenticate a user")
    @PostMapping ("/authenticate")
    public ResponseEntity<?> createAuthenticationToken (@RequestBody AuthenticationDTORequest authenticationDTORequest) throws Exception {
        try {
            logger.info ("Authenticating User with email: {}", authenticationDTORequest.getEmail ());

            authenticationManager.authenticate (new UsernamePasswordAuthenticationToken (authenticationDTORequest.getEmail (), authenticationDTORequest.getPassword ()));

            final UserDetails userDetails = userDetailsService.loadUserByUsername (authenticationDTORequest.getEmail ());
            final String jwt = jwtService.generateToken (userDetails);

            User user = userRepository.findByEmail (authenticationDTORequest.getEmail ()).get ();
            Client client = clientRepository.findByUserId (user.getId ()).get ();

            return ResponseEntity.ok (new AuthenticationDTOResponse (user.getId (), user.getRol (), client.getName (), client.getSurname (), authenticationDTORequest.getEmail (), client.getCity (), (jwt)));

        } catch (Exception e) {
            logger.error ("Error authenticating user: {}", e.getMessage ());
            return ResponseEntity.badRequest ().body (e.getMessage ());
            /*            throw new Exception ("Invalid email or password", e);*/
        }

    }


}


