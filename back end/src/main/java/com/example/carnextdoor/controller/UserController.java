package com.example.carnextdoor.controller;

import com.example.carnextdoor.model.Entitiec.User;
import com.example.carnextdoor.model.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "user")
public class UserController {
    private UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }


    @GetMapping(path = "{userId}")
    public Optional< User > getUser(@PathVariable(name = "userId") Integer userId) {
        return userService.getUser(userId);
    }

    @PostMapping("add")
    public void registerNewUser(@RequestBody User user) {
        userService.addNewUser(user);
    }
}
