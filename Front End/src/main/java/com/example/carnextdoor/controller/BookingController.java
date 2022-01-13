package com.example.carnextdoor.controller;
import com.example.carnextdoor.model.Entitiec.Booking;
import com.example.carnextdoor.model.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/Booking")

public class BookingController {
    private BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }






    @GetMapping
    public List<Booking> getBookings() {
        return bookingService.getBookings();
    }

    @GetMapping(path = "{bookingId}")
    public Optional<Booking> getBooking(@PathVariable(name = "bookingId") Integer bookingId) {
        return bookingService.getBooking(bookingId);
    }

    @PostMapping("add")
    public void registerNewBooking(@RequestBody Booking booking){
        bookingService.addNewBooking(booking);
    }


    @DeleteMapping(path = "delete/{bookingId}")
    public void deleteBooking(@PathVariable ("bookingId") Integer bookingId){
        bookingService.deleteBooking(bookingId);
    }
}
