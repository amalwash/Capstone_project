package com.example.carnextdoor.model.Repository;
import com.example.carnextdoor.model.Entitiec.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepositry extends JpaRepository<User,String > {
    @Query("SELECT roles FROM User  where userName = :userName")
    String findRoles(@Param("userName") String userName);

    @Query("SELECT password FROM User  where userName = :userName")
    String findPassword(@Param("userName") String userName);




}
