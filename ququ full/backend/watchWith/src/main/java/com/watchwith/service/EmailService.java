package com.watchwith.service;

import com.watchwith.dto.UserDto;
import com.watchwith.model.User;
import javax.mail.MessagingException;

public interface EmailService {

    void sendVerificationLink(UserDto user) throws MessagingException;
    User getByToken(String token);
}
