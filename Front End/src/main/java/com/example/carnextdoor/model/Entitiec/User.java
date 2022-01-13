package com.example.carnextdoor.model.Entitiec;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table
public class User {


    @Id
    private String userName;
    private int user_id;
    private String firstname;
    private String password;
    private String user_address;
    private int user_phone;
    private int user_age;
    private String user_email;
    private String roles;

    @OneToMany(mappedBy = "user")
   @JsonIgnore
   private List<Booking> items = new ArrayList<>();


    public User(String userName, int user_id, String firstname, String password, String user_address, int user_phone, int user_age, String user_email, String roles, List<Booking> items) {
        this.userName = userName;
        this.user_id = user_id;
        this.firstname = firstname;
        this.password = password;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.user_age = user_age;
        this.user_email = user_email;
        this.roles = roles;
        this.items = items;
    }


    public User() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public int getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(int user_phone) {
        this.user_phone = user_phone;
    }

    public int getUser_age() {
        return user_age;
    }

    public void setUser_age(int user_age) {
        this.user_age = user_age;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public List<Booking> getItems() {
        return items;
    }

    public void setItems(List<Booking> items) {
        this.items = items;
    }
}