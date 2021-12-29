package com.example.carnextdoor.model.Repository;

import com.example.carnextdoor.model.Entitiec.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {


}
