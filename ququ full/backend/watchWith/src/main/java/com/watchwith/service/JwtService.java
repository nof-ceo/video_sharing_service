package com.watchwith.service;

import com.watchwith.model.User;
import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;
import java.util.function.Function;

public interface JwtService {
    String getLogin(String token);
    Date getExpiration(String token);
    boolean isExpired(String token);
    boolean validateToken(String token, UserDetails user);
    String generateToken(String login);
    <T> T getClaims(String token, Function<Claims, T> function);

}
