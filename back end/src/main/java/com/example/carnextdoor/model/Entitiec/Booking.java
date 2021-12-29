package com.example.carnextdoor.model.Entitiec;
import javax.persistence.*;

@Entity
@Table
public class Booking {
    @Id
    private int Booking_id;
    private String Booking_name;

    @ManyToOne
    @JoinColumn(name = "User_ID", referencedColumnName = "user_id")
    private User user;


    @OneToOne
    @JoinColumn(name ="car_Id",unique = true,updatable = false )
    private Car car;

    public Booking(int booking_id, String booking_name, User user, Car car) {
        Booking_id = booking_id;
        Booking_name = booking_name;
        this.user = user;
        this.car = car;
    }

    public Booking() {
    }

    public int getBooking_id() {
        return Booking_id;
    }

    public void setBooking_id(int booking_id) {
        Booking_id = booking_id;
    }

    public String getBooking_name() {
        return Booking_name;
    }

    public void setBooking_name(String booking_name) {
        Booking_name = booking_name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}