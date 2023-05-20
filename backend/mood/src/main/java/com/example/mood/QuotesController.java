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
@RequestMapping("/api/v1/quotes")
public class QuotesController {

    @Autowired
    private QuotesService quotesService;
    @GetMapping
    public ResponseEntity<List<Quotes>> getAllQuotes(){
        return new ResponseEntity<List<Quotes>>(quotesService.allQuotes(),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Quotes>> getSingleQuote(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Quotes>>(quotesService.singleQuote(id),HttpStatus.OK);


    }



}
