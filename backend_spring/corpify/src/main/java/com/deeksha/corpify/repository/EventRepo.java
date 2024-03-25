package com.deeksha.corpify.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deeksha.corpify.model.Event;

@Repository
public interface EventRepo extends JpaRepository<Event,Long> {

}
