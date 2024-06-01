package com.oauth2.client.model;

import lombok.Data;

@Data
public class PasswordModel {
    private String username;
    private String oldPassword;
    private String newPassword;
}
