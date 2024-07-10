package com.watchwith.controller;

import com.watchwith.dto.LobbyDto;
import com.watchwith.dto.TokenDto;
import com.watchwith.service.LobbyService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1/lobby", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class LobbyController {

    LobbyService lobbyService;

    @PostMapping(value = "/createLobby")
    public TokenDto createLobby(@RequestBody LobbyDto lobbyDto) throws NullPointerException{
        TokenDto token = new TokenDto();
        LobbyDto createdLobby = lobbyService.createLobby(lobbyDto);
        token.setToken(createdLobby.getUuid());

        return token;
    }

    @PostMapping(value = "/deleteLobby")
    @Transactional
    public LobbyDto deleteLobby(@RequestBody LobbyDto lobbyDto) throws Exception {
        return lobbyService.deleteLobby(lobbyDto);
    }
}
