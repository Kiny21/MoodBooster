package com.example.mood;


import com.example.mood.Pictures;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mood.PictureRepo;

import java.util.List;
import java.util.Optional;

@Service
public class PictureService {
    @Autowired
    private PictureRepo pictureRepo;
    public List<Pictures> allPictures(){
        return pictureRepo.findAll();
    }

    public Optional<Pictures> singlePicture(ObjectId id){
        return pictureRepo.findById(id);
    }
}
