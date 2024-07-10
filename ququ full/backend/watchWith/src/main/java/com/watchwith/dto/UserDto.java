package com.watchwith.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    private String email;
    private String login;
    private String password;
    private String firstName;
    private String lastName;
}
