import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/shared/models/Videos';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit{
  video!: Video;

  constructor(private videoService:VideoService,private http:HttpClient){

  }

    ngOnInit(){
      this.videoService.findAll().subscribe(data =>{
        const randomIndex = Math.floor(Math.random() * data.length);
        this.video = data[randomIndex];
      });
    }

  getVideoUrl(): string {
    if (this.video) {
      return `http://localhost:8080/api/v1/videos/${this.video.id}`;
    }
    return '';
  }
}
