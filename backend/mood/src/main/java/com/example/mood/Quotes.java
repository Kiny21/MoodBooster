package com.example.mood;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "quotes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Quotes {
    @Id
    private ObjectId id;
    private String quote;
    private String author;

    public String getId() {
        return id != null ? id.toString() : null;
    }
}
