package com.oauth2.client.controller;

import com.oauth2.client.entity.User;
import com.oauth2.client.entity.VerificationToken;
import com.oauth2.client.model.PasswordModel;
import com.oauth2.client.model.UserModel;
import com.oauth2.client.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.Optional;
import java.util.UUID;

@RestController
@Slf4j
public class RegistrationController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel, final HttpServletRequest request) {
        User user = userService.registerUser(userModel);
        return "Success";
    }

    @GetMapping("/verifyRegistration")
    public String verifyRegistration(@RequestParam("token") String token) {
        String result = userService.validateVerificationToken(token);
        if(result.equalsIgnoreCase("valid")) {
            return "User Verified Successfully";
        }
        return "Bad User";
    }



    @PostMapping("/changePassword")
    public String changePassword(@RequestBody PasswordModel passwordModel){
        User user = userService.findUserByUsername(passwordModel.getUsername());
        if(!userService.checkIfValidOldPassword(user,passwordModel.getOldPassword())) {
            return "Invalid Old Password";
        }
        //Save New Password
        userService.changePassword(user,passwordModel.getNewPassword());
        return "Password Changed Successfully";
    }


    private String applicationUrl(HttpServletRequest request) {
        return "http://" +
                request.getServerName() +
                ":" +
                request.getServerPort() +
                request.getContextPath();
    }
}
