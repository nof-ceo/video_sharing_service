package com.watchwith.service;

import com.watchwith.dto.LobbyDto;
import com.watchwith.model.Lobby;
import com.watchwith.repository.LobbyRepository;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class LobbyServiceImpl implements LobbyService {

    private final LobbyRepository lobbyRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(LobbyServiceImpl.class);
    @Override
    public LobbyDto createLobby(LobbyDto lobbyDto) throws NullPointerException {

        if (lobbyDto != null) {

            String uuid = UUID.randomUUID().toString();
            lobbyDto.setUuid(uuid);

            Lobby lobby = new Lobby();
            lobby.setHost(lobbyDto.getHost());
            lobby.setUuid(lobbyDto.getUuid());
            lobby.setTitle(lobbyDto.getTitle());
            lobby.setMaxParticipants(lobbyDto.getMaxParticipants());

            lobbyRepository.save(lobby);

            return lobbyDto;
        } else
            throw new NullPointerException("argument is null");
    }

    @Override
    public LobbyDto deleteLobby(LobbyDto lobbyDto) throws Exception{

        lobbyRepository.deleteLobbyByUuid(lobbyDto.getUuid());

        Lobby lobby = new Lobby();
        lobby.setHost(lobbyDto.getHost());
        lobby.setUuid(lobbyDto.getUuid());

        if (lobby != null) {
            LobbyDto lobbyDto1 = new LobbyDto();
            lobbyDto1.setUuid(lobby.getUuid());
            lobbyDto1.setHost(lobby.getHost());

            return lobbyDto1;
        } else
            throw new Exception("this lobby doesn't exist");

    }
}
