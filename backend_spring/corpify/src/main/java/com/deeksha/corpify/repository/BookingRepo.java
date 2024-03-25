package com.deeksha.corpify.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deeksha.corpify.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking,Long>{

}
