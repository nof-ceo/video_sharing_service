package com.watchwith.service;

import com.watchwith.dto.UserDto;
import com.watchwith.model.User;
import com.watchwith.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {

        LOGGER.debug("Entering in loadUserByUsername Method...");
        Optional<User> user = userRepository.findUserByLogin(username);
        if(user.isEmpty()){
            LOGGER.error("Username not found: " + username);
            throw new UsernameNotFoundException("could not found user..!!");
        }
        LOGGER.info("User Authenticated Successfully..!!!");
        return user.get();
    }
}
