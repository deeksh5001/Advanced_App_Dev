package com.deeksha.corpify.service;

import java.util.List;

import com.deeksha.corpify.dto.request.UserRequest;
import com.deeksha.corpify.dto.response.UserResponse;


public interface UserService {
    List<UserResponse> getAllUsers();
    UserResponse updateUser(UserRequest request, Long uid);
    UserRequest getUserById(Long uid);
    boolean deleteUser(Long uid);
}
