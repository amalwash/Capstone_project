package com.example.carnextdoor.model.Entitiec;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Car {
    @Id
    private int car_Id;
    private String car_model;
    private String car_color;
    private String car_type;
    private String car_description;


//    @OneToMany(mappedBy = "car")
//    @JsonIgnore
//    private List<Owner> items = new ArrayList<>();

   @ManyToOne
   @JoinColumn(name = "owner_ID", referencedColumnName = "owner_id")
    private Owner owner;

    public Car(int car_Id, String car_model, String car_color, String car_type, String car_description, Owner owner) {
        this.car_Id = car_Id;
        this.car_model = car_model;
        this.car_color = car_color;
        this.car_type = car_type;
        this.car_description = car_description;
        this.owner = owner;
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

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    @Override
    public String toString() {
        return "Car{" +
                "car_Id=" + car_Id +
                ", car_model='" + car_model + '\'' +
                ", car_color='" + car_color + '\'' +
                ", car_type='" + car_type + '\'' +
                ", car_description='" + car_description + '\'' +
                ", owner=" + owner +
                '}';
    }
}