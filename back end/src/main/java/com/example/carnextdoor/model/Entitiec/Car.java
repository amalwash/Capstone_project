package com.example.carnextdoor.model.Entitiec;
import javax.persistence.*;


@Entity
@Table
public class Car {
    @Id
    private int car_Id;
    private String car_model;
    private String car_color;
    private String car_type;
    private String car_description;
    private String img;


    @ManyToOne
    @JoinColumn(name = "owner_ID", referencedColumnName = "owner_id")
    private Owner owner;

    @OneToOne(mappedBy = "car")
    private Booking booking;


//    @OneToOne
//    @JoinColumn(name = "Booking_ID",unique = true,updatable = false)
//    private Booking booking;


    public Car(int car_Id, String car_model, String car_color, String car_type, String car_description, String img, Owner owner, Booking booking) {
        this.car_Id = car_Id;
        this.car_model = car_model;
        this.car_color = car_color;
        this.car_type = car_type;
        this.car_description = car_description;
        this.img = img;
        this.owner = owner;
        this.booking = booking;
    }

    public Car() {
    }

    public int getCar_Id() {
        return car_Id;
    }

    public void setCar_Id(int car_Id) {
        this.car_Id = car_Id;
    }

    public String getCar_model() {
        return car_model;
    }

    public void setCar_model(String car_model) {
        this.car_model = car_model;
    }

    public String getCar_color() {
        return car_color;
    }

    public void setCar_color(String car_color) {
        this.car_color = car_color;
    }

    public String getCar_type() {
        return car_type;
    }

    public void setCar_type(String car_type) {
        this.car_type = car_type;
    }

    public String getCar_description() {
        return car_description;
    }

    public void setCar_description(String car_description) {
        this.car_description = car_description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
