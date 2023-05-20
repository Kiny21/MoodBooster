import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MactServiceTsService } from '../../services/mact-service.ts.service';
import { Activities } from '../../shared/models/Activities';
import { ActivitiesService } from '../../services/activities/activities.service';


@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit{
  activity!:Activities;
  constructor(private activatedRoute:ActivatedRoute, private mactService: MactServiceTsService,
    private activitiesService:ActivitiesService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.mactService.getCartObservable().subscribe((cart)=>{
        this.activity=this.activity;
      });
    })}

    activities: Activities[]=[];
    ngOnInit(): void{

      this.activities=this.activitiesService.getAll();
    }


}
