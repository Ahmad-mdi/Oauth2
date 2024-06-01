package com.oauth2.client.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    @Column(length = 60)
    private String password;
    private String role;
    private boolean enabled = false;
}
