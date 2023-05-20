package com.example.mood;

import lombok.*;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pictures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pictures {
    @Id
    private ObjectId id;
    private String url;
    private String alt;

    public String getId() {
        return id != null ? id.toString() : null;
    }
}
