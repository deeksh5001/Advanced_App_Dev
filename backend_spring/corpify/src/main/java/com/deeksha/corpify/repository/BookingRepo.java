package com.deeksha.corpify.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deeksha.corpify.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Long>{
    List<Booking> findByUserUid(Long userId);

}
