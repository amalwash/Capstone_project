package com.example.carnextdoor.controller;
import com.example.carnextdoor.model.Entitiec.Car;
import com.example.carnextdoor.model.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController


public class CarController {

    private CarService carService;


    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping(path = "api/Cars")
    public List< Car > getCars() {
        return carService.getCars();
    }


    @GetMapping(path = "api/Cars/{carId}")
    public Optional< Car > getCar(@PathVariable(name = "carId") Integer carId) {
        return carService.getCar(carId);
    }

    @PostMapping("api/car/add")
    public void registerNewCar(@RequestBody Car car) {
        carService.addNewCar(car);
    }

   @DeleteMapping(path = "api/delete/{carId}")
   public void deleteCar(@PathVariable("carId")String carId){
        int intcarId = Integer.parseInt(carId);
       carService.deleteCar(intcarId);

   }



}
