package com.deeksha.corpify.service;

import java.util.List;
import java.util.Optional;

import com.deeksha.corpify.dto.request.EventRequest;
import com.deeksha.corpify.model.Event;

public interface EventService {
 String save(EventRequest e);
 void delete(Long eid);
  Event update(EventRequest e, Long eid);
  Optional<Event> getById(Long eid);
  List<Event> getAll();
}
