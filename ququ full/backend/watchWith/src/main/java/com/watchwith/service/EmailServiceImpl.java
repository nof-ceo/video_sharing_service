package com.watchwith.service;

import com.google.gson.Gson;
import com.watchwith.dto.UserDto;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.watchwith.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;

import java.util.UUID;

@Service
public class EmailServiceImpl implements EmailService{

    private final JavaMailSender javaMailSender;
    private final Jedis jedis;
    private final Gson gson;

    @Autowired
    public EmailServiceImpl(JavaMailSender javaMailSender, JedisConnectionFactory factory) {
        this.javaMailSender = javaMailSender;
        jedis = factory.getShardInfo().createResource();
        gson = new Gson();
    }

    // добавить редис, ключ - токен, валюе - юзер
    @Override
    @Async
    public void sendVerificationLink(UserDto user){
        try {
            String verificationToken = UUID.randomUUID().toString();

            // in future change to real site
            String verifyLink = "localhost:3000/verify?token=" + verificationToken;

            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);

            helper.setTo(user.getEmail());
            helper.setSubject("Verification");

            // в gmail линк не работает
            helper.setText(verifyLink, true);

            javaMailSender.send(mimeMessage);

            String json = gson.toJson(user);

            jedis.set(verificationToken, json);
            jedis.expire(verificationToken, 300);

        } catch (MessagingException ex) {
            ex.getCause();
        }
    }

    @Override
    public User getByToken(String token) {
        UserDto user = gson.fromJson(jedis.get(token), UserDto.class);

        jedis.del(token);

        return new User(user.getEmail(), user.getLogin(), user.getPassword(), user.getFirstName(), user.getLastName());
    }
}
