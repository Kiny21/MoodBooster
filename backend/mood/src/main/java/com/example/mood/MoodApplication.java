package com.example.mood;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;



@SpringBootApplication

public class MoodApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoodApplication.class, args);
	}


}
