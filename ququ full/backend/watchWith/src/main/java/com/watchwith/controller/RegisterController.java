package com.watchwith.controller;

import com.watchwith.dto.JwtDto;
import com.watchwith.dto.TokenDto;
import com.watchwith.dto.UserDto;
import com.watchwith.service.UserService;

import javax.mail.MessagingException;

import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/register", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class RegisterController {

    UserService userService;

    @PostMapping(value = "/createAccount")
    public ResponseEntity<String> createAccount(@RequestBody UserDto userDto) throws MessagingException {
        userService.createAccount(userDto);

        return ResponseEntity.ok().body("ok");
    }

    @PostMapping(value = "/verify")
    public JwtDto verify(@RequestBody TokenDto token) {
        return userService.verify(token);
    }

//    @PostMapping(value = "/testRedis")
//    public ResponseEntity<String> testRedis(@RequestBody TokenDto token) {
//        String email = userService.test(token.getToken());
//
//        return ResponseEntity.ok().body(email);
//    }

}
