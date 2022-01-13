package com.example.carnextdoor.model.Entitiec;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")

public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;



    @OneToOne
    @JoinColumn(name = "Car_ID",unique = true,updatable = false)
    private Car car;

    @ManyToOne
    @JoinColumn(name = "UsersName", referencedColumnName = "userName")
    private User user;

  @OneToOne(mappedBy = "booking")
  @JsonIgnore
  private Review review;


    public Booking() {
    }

    public Booking( Car car, User user) {

        this.car = car;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

}