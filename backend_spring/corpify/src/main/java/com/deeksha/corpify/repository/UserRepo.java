package com.deeksha.corpify.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.deeksha.corpify.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    User findByUid(Long uid);

    void deleteByUid(Long uid);
}
