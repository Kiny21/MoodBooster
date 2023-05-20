import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../shared/models/Quotes';

@Injectable()
export class QuoteService {
  private quotesUrl: string;

    constructor(private http:HttpClient) {
      this.quotesUrl='http://localhost:8080/api/v1/quotes';
    }

    public findAll(): Observable<Quote[]>{
      return this.http.get<Quote[]>(this.quotesUrl);
    }
  }

