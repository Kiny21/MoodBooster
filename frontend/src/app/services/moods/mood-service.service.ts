import { Injectable } from '@angular/core';
import { Mood } from '../../mood';

@Injectable({
  providedIn: 'root'
})
export class MoodServiceService {

  constructor() { }

      getMoodById(id: number): Mood{
      return this.getAll().find(mood => mood.id ==id)!;
    }

    getAll(): Mood[]
    { return[  { id: 1, name: 'Happy' },
    { id: 2, name: 'Sad' },
    { id: 3, name: 'Bored' },
    { id: 4, name: 'Tired' },
    { id: 5, name: 'Excited' },
    { id: 6, name: 'Stressed' }, ]

    }
}
