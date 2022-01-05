package com.example.carnextdoor.model.Entitiec;
import javax.persistence.*;

@Entity
@Table
public class Booking {
    @Id
    private int Booking_id;



    @OneToOne
    @JoinColumn(name ="car_Id",unique = true,updatable = false )
    private Car car;

    public Booking(int booking_id, Car car) {
        Booking_id = booking_id;
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

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}