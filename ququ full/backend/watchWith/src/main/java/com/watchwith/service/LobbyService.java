package com.watchwith.service;

import com.watchwith.dto.LobbyDto;

public interface LobbyService {
    LobbyDto createLobby(LobbyDto lobbyDto);
    LobbyDto deleteLobby(LobbyDto lobbyDto) throws Exception;
}
