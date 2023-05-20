package com.example.mood;

import com.example.mood.Quotes;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuotesRepo extends MongoRepository<Quotes, ObjectId> {
}
