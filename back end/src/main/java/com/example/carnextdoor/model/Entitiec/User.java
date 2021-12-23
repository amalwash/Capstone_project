package com.example.carnextdoor.model.Entitiec;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class User {
@Id
    private int user_id;
    private String user_firstName;
    private String user_lastName;
    private String user_address;
    private int user_phone;
    private int user_age;
    private String user_email;

    public User(int user_id, String user_firstName, String user_lastName, String user_address, int user_phone, int user_age, String user_email) {
        this.user_id = user_id;
        this.user_firstName = user_firstName;
        this.user_lastName = user_lastName;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.user_age = user_age;
        this.user_email = user_email;
    }

    public User() {
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_firstName() {
        return user_firstName;
    }

    public void setUser_firstName(String user_firstName) {
        this.user_firstName = user_firstName;
    }

    public String getUser_lastName() {
        return user_lastName;
    }

    public void setUser_lastName(String user_lastName) {
        this.user_lastName = user_lastName;
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

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", user_firstName='" + user_firstName + '\'' +
                ", user_lastName='" + user_lastName + '\'' +
                ", user_address='" + user_address + '\'' +
                ", user_phone=" + user_phone +
                ", user_age=" + user_age +
                ", user_email='" + user_email + '\'' +
                '}';
    }
}
