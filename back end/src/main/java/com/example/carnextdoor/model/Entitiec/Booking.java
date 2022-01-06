package com.example.carnextdoor.model.Entitiec;
import javax.persistence.*;

@Entity
@Table
public class Booking {
    @Id
    private int Booking_id;



    @OneToOne
    @JoinColumn(name = "Car_ID",unique = true,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "UsersName", referencedColumnName = "userName")
    private User user;


    @OneToOne
    @JoinColumn(name = "review_id", unique = true, updatable = false)
    private Review review;


    public Booking() {
    }

    public Booking(int booking_id, Car car, User user, Review review) {
        Booking_id = booking_id;
        this.car = car;
        this.user = user;
        this.review = review;
    }

    public int getBooking_id() {
        return Booking_id;
    }

    public void setBooking_id(int booking_id) {
        Booking_id = booking_id;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Review getReview() {
        return review;
    }

    public void setReview(Review review) {
        this.review = review;
    }
}