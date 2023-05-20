import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mood } from '../mood';
import { selectedMood } from '../shared/models/selectedMood';


@Injectable({
  providedIn: 'root'
})
export class MactServiceTsService {
  private mood: selectedMood=new selectedMood();
  private moodSubject: BehaviorSubject<selectedMood>=new BehaviorSubject(this.mood);

  constructor() { }

  addToCart(mood:Mood):void{
    let moodItem=this.mood.items.find(item => item.mood.id==this.mood.id);
  }

  getCartObservable(): Observable<selectedMood> {
    return this.moodSubject.asObservable();
  }
}
