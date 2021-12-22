package com.example.carnextdoor.model.Repository;
import com.example.carnextdoor.model.Entitiec.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
}
