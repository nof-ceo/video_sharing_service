package com.watchwith.service;

import com.watchwith.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtServiceImpl implements JwtService {
    private static String SECRET_KEY;

    public JwtServiceImpl(@Value("${secret.key}") String key) {
        SECRET_KEY = key;
    }

    @Override
    public String getLogin(String token) {
        return getClaims(token, Claims::getSubject);
    }

    @Override
    public Date getExpiration(String token) {
        return  getClaims(token, Claims::getExpiration);
    }

    @Override
    public boolean validateToken(String token, UserDetails user) {
        final String username = getLogin(token);
        return (username.equals(user.getUsername()) && !isExpired(token));
    }

    @Override
    public <T> T getClaims(String token, Function<Claims, T> function) {
            Claims claims = Jwts.parser().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();

            return function.apply(claims);
    }

    @Override
    public String generateToken(String login) {
        return createToken(new HashMap<String, Object>(), login);
    }


    @Override
    public boolean isExpired(String token) {
        return getExpiration(token).before(new Date());
    }

    public Key getSignKey() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(SECRET_KEY));
    }


    private String createToken(Map<String, Object> claims, String username) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*1))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

}
