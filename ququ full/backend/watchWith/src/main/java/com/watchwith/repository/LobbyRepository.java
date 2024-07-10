package com.watchwith.repository;

import com.watchwith.model.Lobby;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LobbyRepository extends JpaRepository<Lobby, Integer> {
    void deleteLobbyByUuid(String uuid);
}
