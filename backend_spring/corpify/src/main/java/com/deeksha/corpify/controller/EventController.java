package com.deeksha.corpify.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deeksha.corpify.dto.request.EventRequest;
import com.deeksha.corpify.model.Event;
import com.deeksha.corpify.service.EventService;
import java.util.List;
import java.util.Optional;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/api/event")
@RequiredArgsConstructor
@Tag(name = "Event Details", description = "Endpoints for events")
public class EventController {

    private final EventService eventService;

    @PostMapping("/save")
    public String save(@RequestBody EventRequest entity) {
        return eventService.save(entity);
    }

    @GetMapping("/getAll")
    public List<Event> getAllEvent() {
        return eventService.getAll();
    }
    
    @PutMapping("update/{id}")
    public Event updateEvent( @RequestBody EventRequest entity,@PathVariable Long id) {
        //TODO: process PUT request
        
        return eventService.update(entity,id);
    }
    
    @GetMapping("/getById/{id}")
    public Optional<Event> getById(@PathVariable Long id) {
        return eventService.getById(id);
    }
    

}
