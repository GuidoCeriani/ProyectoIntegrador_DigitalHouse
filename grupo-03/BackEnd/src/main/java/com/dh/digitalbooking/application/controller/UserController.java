package com.dh.digitalbooking.application.controller;

import com.dh.digitalbooking.application.dto.UserRegistryDTO;
import com.dh.digitalbooking.application.mapper.UserMapper;
import com.dh.digitalbooking.security.dto.AuthenticationDTOResponse;
import com.dh.digitalbooking.security.service.JwtService;
import com.dh.digitalbooking.model.User;
import com.dh.digitalbooking.repository.UserRepository;
import com.dh.digitalbooking.service.UserService;
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

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserMapper userMapper;
    private final UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private final UserDetailsService userDetailsService;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRepository userRepository;

    /*UserRegistryDTO tiene: name, surname, email y pass*/
    @Operation (summary = "Register a new user", description = "Register a new user")
    @PostMapping
    public ResponseEntity<?> registerUser(@RequestBody UserRegistryDTO userRegistryDTO) throws Exception {

        try {
            userService.registerUser (userRegistryDTO);
            User user = userRepository.findByEmail(userRegistryDTO.getEmail()).get();
            logger.info ("Authenticating User with email: {}", userRegistryDTO.getEmail());

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            userRegistryDTO.getEmail(),
                            userRegistryDTO.getPassword()
                    )
            );

            final UserDetails userDetails = userDetailsService.loadUserByUsername (userRegistryDTO.getEmail ());
            final String jwt = jwtService.generateToken (userDetails);

            return (ResponseEntity.status (CREATED).body (new AuthenticationDTOResponse(user.getId(),userRegistryDTO.getName(), userRegistryDTO.getSurname(), userRegistryDTO.getEmail(), userRegistryDTO.getRol (), (jwt))));
/*            return (ResponseEntity.ok (new AuthenticationDTOResponse(user.getId(),userRegistryDTO.getName(), userRegistryDTO.getSurname(), userRegistryDTO.getEmail(), userRegistryDTO.getRol (), (jwt))));*/

        } catch (Exception e) {
            logger.error ("Error authenticating user: {}", e.getMessage ());
            return ResponseEntity.badRequest ().body (e.getMessage ());
        }
    }




}
