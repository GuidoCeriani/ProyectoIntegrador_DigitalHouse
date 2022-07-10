package com.dh.digitalbooking.security.filter;

import com.dh.digitalbooking.security.service.IJwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

   @Autowired
   private UserDetailsService userDetailsService;
   @Autowired
   private IJwtService jwtService; // Servicio para procesar el token



   @Override
   protected void doFilterInternal (HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

      final String authorizationHeader = request.getHeader("Authorization");
      String email = null;
      String jwt = null;

      if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
         jwt = authorizationHeader.substring(7);
         email = jwtService.extractUserName (jwt);
      }

      if(email != null && SecurityContextHolder.getContext ().getAuthentication () == null) {
         UserDetails userDetails = this.userDetailsService.loadUserByUsername (email);
         if (jwtService.validateToken (jwt, userDetails)) {
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken (userDetails, null, userDetails.getAuthorities ());
            usernamePasswordAuthenticationToken.setDetails (new WebAuthenticationDetailsSource ().buildDetails (request));
            SecurityContextHolder.getContext ().setAuthentication (usernamePasswordAuthenticationToken);
         }
      }
      filterChain.doFilter (request, response);
   }
}
