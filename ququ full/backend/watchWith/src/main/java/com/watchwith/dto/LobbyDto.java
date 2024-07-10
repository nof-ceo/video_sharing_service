package com.watchwith.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LobbyDto {
    private String host;
    private String uuid;
    private String title;
    private int maxParticipants;
}
