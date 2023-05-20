package com.example.mood;

import com.example.mood.Quotes;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.mood.QuotesRepo;

import java.util.List;
import java.util.Optional;

@Service
public class QuotesService {

    @Autowired
    private QuotesRepo quotesRepo;
    public List<Quotes> allQuotes(){
        return quotesRepo.findAll();
    }

    public Optional<Quotes> singleQuote(ObjectId id){
        return quotesRepo.findById(id);
    }
}
