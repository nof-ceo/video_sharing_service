package com.watchwith.service;

import com.watchwith.dto.JwtDto;
import com.watchwith.dto.TokenDto;
import com.watchwith.dto.UserDto;
import com.watchwith.model.User;

import javax.mail.MessagingException;

public interface UserService {
    void createAccount(UserDto userDto) throws MessagingException;
    JwtDto verify(TokenDto tokenDto);
}
