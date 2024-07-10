package com.watchwith.controller;

import com.watchwith.dto.AuthDto;
import com.watchwith.dto.JwtDto;
import com.watchwith.service.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @PostMapping("/login")
    public JwtDto authenticateAndGetToken(@RequestBody AuthDto authDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authDto.getLogin(), authDto.getPassword()));
        if(authentication.isAuthenticated()){
            return JwtDto.builder()
                    .accessToken(jwtService.generateToken(authDto.getLogin())).build();
        } else {
            throw new UsernameNotFoundException("invalid user request");
        }
    }

}