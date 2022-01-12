package com.example.user.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.modal.userModal;
import com.example.user.repository.userRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class userController {
	
	@Autowired
	userRepository user_repository;
	
	
	@GetMapping("/user")
	public ResponseEntity<List<userModal>> getUsers(){
		try {
			
			return new ResponseEntity<>(user_repository.findAll(),HttpStatus.OK);
			
		}
		catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/user")
	public ResponseEntity<userModal> createUser(@RequestBody userModal user){
		try {
			userModal new_user=user_repository.save(user);
			return new ResponseEntity<>(new_user,HttpStatus.CREATED);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") String id){
		
		try{
			user_repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PatchMapping("/user/{id}")
	public ResponseEntity<userModal> updateUser(@RequestBody userModal user,@PathVariable("id") String id){
			
			Optional<userModal> oldUser=user_repository.findById(id);
			userModal newUser=oldUser.get();
	
			newUser.setName(user.getName());
			newUser.setEmail(user.getEmail());
			newUser.setPhone(user.getPhone());
			newUser.setCompany(user.getCompany());
			
			user_repository.save(newUser);
			
			return new ResponseEntity<>(newUser,HttpStatus.OK);
	}
	
	@PatchMapping("/user/like/{id}")
	public ResponseEntity<userModal> updateLike(@RequestBody userModal user,@PathVariable("id") String id){
			
			Optional<userModal> oldUser=user_repository.findById(id);
			userModal newUser=oldUser.get();
	
			newUser.setLike(user.getLike());
			
			user_repository.save(newUser);
			
			return new ResponseEntity<>(newUser,HttpStatus.OK);
	}

}