package com.kovair.devops.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.kovair.devops.model.User;

@Controller
public class HomeController {
	
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String displayLoginPage() {
		return "login";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(User user) {
		
		//Check the user name and password
		if(user != null){
			String userName = user.getUserName(); 
			String password = user.getPassword();
			if(userName == "admin" && password == "admin"){
				return "welcome";
			}
		}
		return "welcome";
	}
}
