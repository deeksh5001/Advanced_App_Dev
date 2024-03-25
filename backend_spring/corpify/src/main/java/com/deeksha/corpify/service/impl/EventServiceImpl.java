package com.deeksha.corpify.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.deeksha.corpify.dto.request.EventRequest;
import com.deeksha.corpify.model.Event;
import com.deeksha.corpify.repository.EventRepo;
import com.deeksha.corpify.service.EventService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    @Autowired
	EventRepo eventRepo;
	
	public String save(EventRequest e)
	{
        var event= new Event();
        event=Event.builder()
        .count(e.getCount())
        .description(e.getDescription())
        .eventType(e.getEventType())
        .mode(e.getMode())
        .price(e.getPrice())
        .build();

        eventRepo.save(event);
        return "Event Saved Successfully";
	}
	
	public void delete(Long eid)
	{
		eventRepo.deleteById(eid);
	}
	
	public Event update(EventRequest e, Long eid) {
	       Optional<Event> a= eventRepo.findById(eid);
	       
           var event= new Event();
	        if (a.isPresent()) {
                event=Event.builder()
                .eid(eid)
                .count(e.getCount())
                .description(e.getDescription())
                .eventType(e.getEventType())
                .mode(e.getMode())
                .price(e.getPrice())
                .build();
                eventRepo.save(event);
	        }
	        return event;
	}
	
	public Optional<Event> getById(Long eid)
	{
		Optional<Event> s1=eventRepo.findById(eid);
		return s1;
	}

    public List<Event> getAll()
    {
        return eventRepo.findAll();
    }
}
