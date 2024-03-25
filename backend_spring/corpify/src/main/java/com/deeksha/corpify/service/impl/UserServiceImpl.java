package com.deeksha.corpify.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.deeksha.corpify.dto.request.UserRequest;
import com.deeksha.corpify.dto.response.UserResponse;
import com.deeksha.corpify.model.User;
import com.deeksha.corpify.repository.JwtRepo;
import com.deeksha.corpify.repository.UserRepo;
import com.deeksha.corpify.service.UserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    @Autowired
	UserRepo userRepository; 
    @Autowired
	JwtRepo tokenRepository; 
	
    private final PasswordEncoder passwordEncoder;


    public List<UserResponse> getAllUsers()
	{
		List<User> userList = userRepository.findAll();
        return userList.stream()
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
	}


	public UserResponse updateUser(UserRequest request, Long uid) {
	        User user = userRepository.findByUid(uid);
	        User newUser = new User();
	        if (user != null) {
	            newUser = User.builder()
	            		.uid(uid)
	                    .name(request.getName())
	                    .email(request.getEmail())
	                    .password(passwordEncoder.encode(request.getPassword()))
	                    .role(request.getRole())
	                    .phone(request.getPhone())
	                    .build();
	            userRepository.save(newUser);
	        }
	        return mapUserToUserResponse(newUser);
	}

    public UserRequest getUserById(Long uid)
	{
		User user = userRepository.findByUid(uid);
	    return mapUserToUserRequest(user);
	}
	public boolean deleteUser(Long uid)
	{
		User user = userRepository.findByUid(uid);
        if (user != null) {
            tokenRepository.deleteByUserUid(uid);
            userRepository.deleteByUid(uid);
            return true;
        } else {
            return false;
        }
	}
    private UserResponse mapUserToUserResponse(User user) {
        return UserResponse.builder()
        		.uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .phone(user.getPhone())
                .build();
    }
	private UserRequest mapUserToUserRequest(User user) {
        return UserRequest.builder()
                .name(user.getName())
                .email(user.getEmail())
                .password(user.getPassword())
                .role(user.getRole())
                .phone(user.getPhone())
                .build();
    }

}
