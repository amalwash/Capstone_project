package com.example.carnextdoor.model.Repository;
import com.example.carnextdoor.model.Entitiec.Car;
import org.hibernate.sql.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {



//   @Query("Select owner.owner_id FROM Owner WHERE Car.car_Id =:car_Id")
//    List<Integer> findOwner(@Param("car_Id") Integer car_Id);


}