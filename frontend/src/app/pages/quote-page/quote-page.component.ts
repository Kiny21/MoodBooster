import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from 'src/app/shared/models/Quotes';


@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit{
  quote!: Quote;

  constructor(private quoteService:QuoteService, private http: HttpClient){

  }

    ngOnInit(){
      this.quoteService.findAll().subscribe(data =>{
        const randomIndex = Math.floor(Math.random() * data.length);
        this.quote = data[randomIndex];
      });
    }
    getQuoteUrl(): string {
      if (this.quote) {
        return `http://localhost:8080/api/v1/quotes/${this.quote.id}`;
      }
      return '';
    }
}





