package com.example.carnextdoor.controller;
import com.example.carnextdoor.model.Entitiec.Car;
import com.example.carnextdoor.model.Service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "/car")
public class CarController {
    private CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping
    public List< Car > getCars() {
        return carService.getCars();
    }


    @GetMapping(path = "{carId}")
    public Optional< Car > getCar(@PathVariable(name = "carId") Integer carId) {
        return carService.getCar(carId);
    }

    @PostMapping("add")
    public void registerNewCar(@RequestBody Car car) {
        carService.addNewCar(car);
    }
//@DeleteMapping(path = "delete/{carId}")
//    public void deleteCar(@PathVariable("carId")Integer carId){
//        carService.deleteCar(carId);
//}

}
