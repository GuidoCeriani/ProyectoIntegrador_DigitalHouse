package com.dh.digitalbooking.security.config;

import com.dh.digitalbooking.security.filter.JwtRequestFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

   @Autowired
   private final UserDetailsService userDetailsService;

   @Autowired
   private JwtRequestFilter jwtRequestFilter;

   @Autowired
   private BCryptPasswordEncoder bcryptPasswordEncoder;

   @Autowired
   private static final String[] AUTH_WHITELIST = {
         // -- swagger ui
         "/v2/api-docs",
         "/v3/api-docs",
         "/swagger-resources",
         "/swagger-resources/**",
         "/configuration/ui",
         "/configuration/security",
         "/swagger-ui.html",
         "/webjars/**"
   };

   @Override
   protected void configure (AuthenticationManagerBuilder auth) throws Exception {
      auth.userDetailsService (userDetailsService);
   }

   @Override
   protected void configure (HttpSecurity http) throws Exception {
      http
            .httpBasic ()
            .and ()
            .csrf ()
            .disable ();

      http
            .cors (configurer -> {
         CorsConfigurationSource source = src -> {
            var corsConfiguration = new CorsConfiguration ();
            corsConfiguration.setAllowedMethods (List.of ("*"));
            corsConfiguration.setAllowedOrigins (List.of ("*"));
            corsConfiguration.setAllowedHeaders (List.of ("*"));
            corsConfiguration.setExposedHeaders (List.of ("*"));
            return corsConfiguration;
         };
         configurer.configurationSource (source);
      });

      http
            .authorizeRequests ()

            /*--------------------- ROLE_ADMIN ------------------------*/
            .antMatchers ( "/administration").hasAuthority ("ROLE_ADMIN")

            .antMatchers (POST, "/categories").hasAuthority ("ROLE_ADMIN")
            .antMatchers (PUT, "/categories").hasAuthority ("ROLE_ADMIN")
            .antMatchers (DELETE, "/categories/**").hasAuthority ("ROLE_ADMIN")

            .antMatchers (POST, "/cities").hasAuthority ("ROLE_ADMIN")
            .antMatchers (PUT, "/cities").hasAuthority ("ROLE_ADMIN")
            .antMatchers (DELETE, "/cities/**").hasAuthority ("ROLE_ADMIN")

            .antMatchers (POST, "/features").hasAuthority ("ROLE_ADMIN")
            .antMatchers (PUT, "/features").hasAuthority ("ROLE_ADMIN")
            .antMatchers (DELETE, "/features/**").hasAuthority ("ROLE_ADMIN")

            .antMatchers (POST, "/images").hasAuthority ("ROLE_ADMIN")
            .antMatchers (PUT, "/images").hasAuthority ("ROLE_ADMIN")
            .antMatchers (DELETE, "/images/**").hasAuthority ("ROLE_ADMIN")

            .antMatchers (POST, "/products").hasAuthority ("ROLE_ADMIN")
            .antMatchers (PUT, "/products").hasAuthority ("ROLE_ADMIN")
            .antMatchers (PATCH, "/products/**").hasAuthority ("ROLE_ADMIN")
            .antMatchers (DELETE, "/products/**").hasAuthority ("ROLE_ADMIN")

            .antMatchers (GET, "/reservations/admin/**").hasAuthority ("ROLE_ADMIN")

            /*--------------------- ROLE_ADMIN & ROLE_CLIENT ------------------------*/
            .antMatchers (GET, "/reservations").hasAnyAuthority ("ROLE_ADMIN", "ROLE_CLIENT")
            .antMatchers (POST, "/reservations").hasAnyAuthority ("ROLE_ADMIN", "ROLE_CLIENT")
            .antMatchers (DELETE, "/reservations/**").hasAnyAuthority ("ROLE_ADMIN", "ROLE_CLIENT")

            /*--------------------- PermitAll ------------------------*/
            .antMatchers ("/authenticate").permitAll ()
            .antMatchers (POST, "/users").permitAll ()

            /*-------------------- AnyOtherRequest -------------------*/
            .anyRequest ().permitAll ()
            .and().sessionManagement ().sessionCreationPolicy (SessionCreationPolicy.STATELESS);

      http.addFilterBefore (jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
   }

   @Override
   @Bean
   public AuthenticationManager authenticationManagerBean () throws Exception {
      return super.authenticationManagerBean ();
   }

   @Bean
   public DaoAuthenticationProvider authenticationProvider() {
       DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
       provider.setPasswordEncoder(bcryptPasswordEncoder);
       provider.setUserDetailsService(userDetailsService);
       return provider;
   }

}