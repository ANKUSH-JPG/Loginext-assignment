package com.example.user.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.user.modal.userModal;

public interface userRepository extends MongoRepository<userModal,String> {

}
