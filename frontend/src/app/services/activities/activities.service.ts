import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sample_activities } from 'src/app/data';
import { Activities } from 'src/app/shared/models/Activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http:HttpClient) { }

  getAll(): Activities[]{
    return sample_activities;
  }

getActivityById(id: number): Activities{
  return this.getAll().find(activity => activity.id ==id)!;
}


}
