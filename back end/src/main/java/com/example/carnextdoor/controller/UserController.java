package com.example.carnextdoor.controller;

import com.example.carnextdoor.model.Entitiec.User;
import com.example.carnextdoor.model.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class UserController {

    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }




    @GetMapping("api/user")

    public List<User> getUser() {


        return userService.getUser();
    }

    @GetMapping("api/user/login")
    public String CheckLogin(@RequestParam(name="userName") String userName, @RequestParam(name="password")String password){

        return userService.checkLogin(userName,password);
    }

    @PostMapping("api/user/add")
    @ResponseBody
    public String registerNewUser(@RequestBody User user){
        int result = userService.addNewUser(user);
        if(result == 0){
            return "username already exist";
        }
        else{
            return "login successfully";
        }
    }

    @DeleteMapping(path = "api/user/delete/{userName}")
    public void deleteUser(@PathVariable ("userName") String userName){
        userService.deleteUser(userName);
    }



}
