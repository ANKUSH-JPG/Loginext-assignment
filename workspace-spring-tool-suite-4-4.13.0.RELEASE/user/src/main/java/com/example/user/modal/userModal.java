package com.example.user.modal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="users")
public class userModal {

	@Id
	private String id;
	private String  username;
	private String  name;
	private String  email;
	private String  phone;
	private String  website;
	private addressModal address;
	private companyModal company;
	private Boolean like;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public addressModal getAddress() {
		return address;
	}
	public void setAddress(addressModal address) {
		this.address = address;
	}
	public companyModal getCompany() {
		return company;
	}
	public void setCompany(companyModal company) {
		this.company = company;
	}
	public Boolean getLike() {
		return like;
	}
	public void setLike(Boolean like) {
		this.like = like;
	}
	
	
}
