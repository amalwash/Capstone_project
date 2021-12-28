package com.example.carnextdoor.model.Repository;
import com.example.carnextdoor.model.Entitiec.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository  extends JpaRepository<User, Integer> {
}
