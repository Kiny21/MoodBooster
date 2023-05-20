package com.example.mood;

import com.example.mood.Videos;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mood.VideoRepo;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    private VideoRepo videoRepo;
    public List<Videos> allVideos(){
        return videoRepo.findAll();
    }

    public Optional<Videos> singleVideo(ObjectId id){
        return videoRepo.findById(id);
    }
}
