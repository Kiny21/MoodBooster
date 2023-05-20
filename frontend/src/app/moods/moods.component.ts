import { Component } from '@angular/core';
import { Mood } from '../mood';
import { MOODS } from './mock-mood';
import { ActivatedRoute,Router } from '@angular/router';
import { MoodServiceService } from '../services/moods/mood-service.service';
import { MactServiceTsService } from '../services/mact-service.ts.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})

export class MoodsComponent{

  moods = MOODS;
  mood!: Mood;
  selectedMood?: Mood;

  onSelect(mood: Mood): void {
    this.selectedMood = mood;
  }

  constructor(private moodService:MoodServiceService,private route:ActivatedRoute,private mactService: MactServiceTsService, private router: Router){

  }

  addToCart(){
    this.mactService.addToCart(this.mood);
    this.router.navigateByUrl('/activity-page');
  }
}
