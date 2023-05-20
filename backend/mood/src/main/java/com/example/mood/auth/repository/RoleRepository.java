package com.example.mood.auth.repository;

import com.example.mood.auth.models.ERole;
import com.example.mood.auth.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
