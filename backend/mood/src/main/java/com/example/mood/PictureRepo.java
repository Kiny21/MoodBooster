package com.example.mood;


import com.example.mood.Pictures;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PictureRepo extends MongoRepository<Pictures, ObjectId> {


}
