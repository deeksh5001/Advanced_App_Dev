package com.deeksha.corpify.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class UserController {

    @GetMapping("/hello")
    public String getMethodName() {
        return "hello world!";
    }
    
}
