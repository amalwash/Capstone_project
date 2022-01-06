package com.example.carnextdoor.model.Repository;
import com.example.carnextdoor.model.Entitiec.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
