package com.dh.digitalbooking.service;

import com.dh.digitalbooking.application.dto.UserRegistryDTO;
import com.dh.digitalbooking.exception.EmailAlreadyRegisteredException;
import com.dh.digitalbooking.model.Client;
import com.dh.digitalbooking.model.RolName;
import com.dh.digitalbooking.model.User;
import com.dh.digitalbooking.repository.ClientRepository;
import com.dh.digitalbooking.repository.RolRepository;
import com.dh.digitalbooking.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

   Logger logger = LoggerFactory.getLogger (UserService.class);
   private final UserRepository userRepository;
   private final PasswordEncoder passwordEncoder;
   private final RolRepository rolRepository;
   private final ClientRepository clientRepository;


/* TODO Borrarlo
    public User addAdmin(User user) {
        return addNew(user, RolName.ROLE_ADMIN);
    }*/

   public User addUser (User user) {
      return addNew (user, RolName.ROLE_CLIENT);
   }

   private User addNew (User user, RolName rolName) {
      ensureUserNotRegistered (user);
      encryptPass (user);
      setRol (user, rolName);

      logger.info ("Adding User with userRol: {}", user.getRol ().getName ());

      return userRepository.save (user);
   }


   /**
    * @param userRegistryDTO Registry of a new user in the system
    */
   public void registerUser (UserRegistryDTO userRegistryDTO) {
      User user = builderUser (userRegistryDTO);
      ensureUserNotRegistered (user);
      encryptPass (user);
      userRepository.save (user);

      addClient (userRegistryDTO, user);

      /*Al momento de registrarse un usuario cliente los atributos: city y reservations son nullos*/
   }

   /**
    * @param user
    * @throws EmailAlreadyRegisteredException Ensure that the user is not registered in the database yet. Validate the
    * email.
    */
   private void ensureUserNotRegistered (User user) throws EmailAlreadyRegisteredException {
      userRepository.findByEmail (user.getEmail ()).ifPresent (existingUser -> {
         logger.info ("User already registered: {}", existingUser.getEmail ());
         throw new EmailAlreadyRegisteredException ("email already registered: " + existingUser.getEmail ());
      });
   }

   /**
    * @param username
    * @return UserDetails
    * @throws UsernameNotFoundException
    * For the username, find the user in the database. If the user is not found, throw a UsernameNotFoundException. If the user is found, return the user.
    */
   @Override
   public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
      /*        Optional<User> possibleUser = userRepository.findByUsername(username);*/
      Optional<User> possibleUser = userRepository.findByEmail (username);
      if (possibleUser.isPresent ()) {
         User user = possibleUser.get ();
         logger.info ("LoadByUsername " + user.getEmail ());

         List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority> ();
         authorities.add (new SimpleGrantedAuthority (user.getRol ().getName ()));

         logger.info ("User authenticated " + user.getEmail ());

         /*Profe*/
         /*return new User(user.getEmail(), user.getPassword(), true, true, true, true, authorities);*/

         //TODO CON ESTO FUNCIONABA
         return User.builder ()
               .id (user.getId ())
//             .username(user.getUsername())
               .password (user.getPassword ())
               .email (user.getUsername ()) //porque nuestro usuario es el email
               .rol (user.getRol ()).build ();
      }
      logger.warn ("UserNotFound - loadByUsername ---> " + username);
      throw new UsernameNotFoundException (username);
   }

   /**
    * @param user
    * @return user
    * Encrypt the password of the user when the user is created.
    */
   private User encryptPass (User user) {

      String plainPassword = user.getPassword ();
      String encryptedPassword = passwordEncoder.encode (plainPassword);
      user.setPassword (encryptedPassword);

      logger.info ("Encrypted Pass User " + user.getEmail () + " " + user.getRol ().getName ());

      return userRepository.save (user);
   }

   /**
    * @param user
    * @param rolName
    * To set the rol of the user.
    */
   private void setRol (User user, RolName rolName) {
      user.setRol (rolRepository.findByName (rolName));
   }

   /**
    * @param userRegistryDTO
    * @return User
    * Create a new user from the UserRegistryDTO
    */
   private User builderUser (UserRegistryDTO userRegistryDTO) {
      var user =
            User.builder ().password (userRegistryDTO.getPassword ()).email (userRegistryDTO.getEmail ()).rol (rolRepository.findByName (RolName.ROLE_CLIENT)).build ();
      return user;
   }

   /**
    * @param userRegistryDTO
    * @param user Create a new client for the user
    */
   private void addClient (UserRegistryDTO userRegistryDTO, User user) {
      Client client = new Client ();
      client.setUser (user);
      client.setName (userRegistryDTO.getName ());
      client.setSurname (userRegistryDTO.getSurname ());
      clientRepository.save (client);
   }
}
