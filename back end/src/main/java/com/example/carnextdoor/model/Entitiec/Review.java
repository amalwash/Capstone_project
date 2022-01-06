package com.example.carnextdoor.model.Entitiec;
import javax.persistence.*;

@Entity
@Table
public class Review {
    @Id
    private int Review_id;
    private String Review_details;
    private String Review_Date;




    @OneToOne(mappedBy = "review")
    private Booking booking;


    public Review(int review_id, String review_details, String review_Date, Booking booking) {
        Review_id = review_id;
        Review_details = review_details;
        Review_Date = review_Date;
        this.booking = booking;
    }

    public Review() {
    }

    public int getReview_id() {
        return Review_id;
    }

    public void setReview_id(int review_id) {
        Review_id = review_id;
    }

    public String getReview_details() {
        return Review_details;
    }

    public void setReview_details(String review_details) {
        Review_details = review_details;
    }

    public String getReview_Date() {
        return Review_Date;
    }

    public void setReview_Date(String review_Date) {
        Review_Date = review_Date;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
