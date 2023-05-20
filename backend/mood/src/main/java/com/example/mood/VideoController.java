package com.example.mood;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/videos")
public class VideoController {
    @Autowired
    private VideoService videoService;
    @GetMapping
    public ResponseEntity<List<Videos>> getAllVideos(){
        return new ResponseEntity<List<Videos>>(videoService.allVideos(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Videos>> getSingleVideo(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Videos>>(videoService.singleVideo(id),HttpStatus.OK);


    }

}
