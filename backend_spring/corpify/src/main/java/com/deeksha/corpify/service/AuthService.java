package com.deeksha.corpify.service;

import com.deeksha.corpify.dto.request.LoginRequest;
import com.deeksha.corpify.dto.request.RegisterRequest;
import com.deeksha.corpify.dto.response.LoginResponse;

public interface AuthService {
String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}
