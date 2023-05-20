package com.example.mood;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/pictures")
public class PictureController {
    @Autowired
    private PictureService pictureService;
    @GetMapping
    public ResponseEntity<List<Pictures>> getAllPictures(){
        return new ResponseEntity<List<Pictures>>(pictureService.allPictures(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Pictures>> getSinglePicture(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Pictures>>(pictureService.singlePicture(id),HttpStatus.OK);


    }



}
