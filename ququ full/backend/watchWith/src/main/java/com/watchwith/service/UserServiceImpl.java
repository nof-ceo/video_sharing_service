package com.watchwith.service;

import com.watchwith.dto.AuthDto;
import com.watchwith.dto.JwtDto;
import com.watchwith.dto.TokenDto;
import com.watchwith.dto.UserDto;
import com.watchwith.model.User;
import com.watchwith.repository.UserRepository;
import javax.mail.MessagingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final JwtService jwtService;
    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    public UserServiceImpl(UserRepository userRepository, EmailServiceImpl emailService, JwtService jwtService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.jwtService = jwtService;
    }

    @Override
    public void createAccount(UserDto userDto) throws MessagingException {
        userDto.setPassword(BCrypt.hashpw(userDto.getPassword(), BCrypt.gensalt()));

        emailService.sendVerificationLink(userDto);
    }

    // добавить обработку ошибок
    @Override
    public JwtDto verify(TokenDto token) {
        User user = emailService.getByToken(token.getToken());

        if(user == null) {
            throw new NullPointerException();
        }

        userRepository.save(user);

        AuthDto authDto = new AuthDto();
        authDto.setLogin(user.getLogin());
        authDto.setPassword(user.getPassword());

        return generateJwt(authDto);
    }

    public JwtDto generateJwt(AuthDto authDto) {
        return JwtDto.builder()
                .accessToken(jwtService.generateToken(authDto.getLogin())).build();
    }

    public String generateRefreshToken() {
        return "";
    }
}
