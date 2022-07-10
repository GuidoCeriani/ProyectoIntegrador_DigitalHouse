package com.dh.digitalbooking.configuration.data;

import com.dh.digitalbooking.exception.UserNotFoundException;
import com.dh.digitalbooking.model.Client;
import com.dh.digitalbooking.model.Rol;
import com.dh.digitalbooking.model.RolName;
import com.dh.digitalbooking.model.User;
import com.dh.digitalbooking.repository.ClientRepository;
import com.dh.digitalbooking.repository.RolRepository;
import com.dh.digitalbooking.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

   Logger logger = LoggerFactory.getLogger (DataLoader.class);

   @Autowired
   private UserRepository userRepository;
   @Autowired
   private RolRepository rolRepository;

   @Autowired
   private ClientRepository clientRepository;

   @Autowired
   public DataLoader (UserRepository userRepository, RolRepository rolRepository) {
      this.userRepository = userRepository;
      this.rolRepository = rolRepository;
   }


   @Override
   public void run (ApplicationArguments args) throws UserNotFoundException, Exception {
      // Creo Usuario ADMIN
      BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder ();
      String passAdmin = passwordEncoder.encode ("adminAdmin");
      String passUser = passwordEncoder.encode ("userUser");

      Rol rolAdmin = rolRepository.findByName (RolName.ROLE_ADMIN);
      Rol rolClient = rolRepository.findByName (RolName.ROLE_CLIENT);

      try {
         createUserByDefault ("admin", passAdmin, rolAdmin);

         createUserByDefault ("user", passUser, rolClient);

      } catch (Exception e) {
/*         System.out.printf (e.getMessage ());*/
         logger.error ("DataLoader: error creating users by default");
      }
   }


   private User createUserByDefault (String user, String pass, Rol rol) {
       User userByDefault = null;
       if (userRepository.findByEmail (user+"@gmail.com").isEmpty()) {
          userByDefault = new User ();
          userByDefault.setPassword (pass);
          userByDefault.setEmail (user+"@gmail.com");
          userByDefault.setRol (rol);
          userRepository.save (userByDefault);

          Client client = new Client ();
          client.setUser (userByDefault);
            client.setName (user);
            client.setSurname (user);
            clientRepository.save (client);

          logger.info ("DataLoader: User: "+ user + " " + rol.getName () + " by default created");
       }
       else if(userRepository.findByEmail(user).isPresent()){
          logger.info ("DataLoader: Users already exist");
       }
       return userByDefault;
   }


}
