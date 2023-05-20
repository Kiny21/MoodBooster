import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../shared/models/Videos';

@Injectable()
export class VideoService {
  private videoUrl: string;

  constructor(private http:HttpClient) {
    this.videoUrl='http://localhost:8080/api/v1/videos';
  }

  public findAll(): Observable<Video[]>{
    return this.http.get<Video[]>(this.videoUrl);
  }
}
