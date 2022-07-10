package com.dh.digitalbooking.application.mapper;

import com.dh.digitalbooking.application.dto.UserDTO;
import com.dh.digitalbooking.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User toEntity(UserDTO userDTO) {
        return User.builder()
/*                   .username(userDTO.getUsername())*/
                   .password(userDTO.getPassword())
                   .email(userDTO.getEmail())
                   .build();
    }

    public UserDTO toDTO(User user) {
        return UserDTO.builder()
/*                   .username(user.getUsername())*/
                   .password(user.getPassword())
                   .email(user.getUsername ())
                   .build();
    }


}
