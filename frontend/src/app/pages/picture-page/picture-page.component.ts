import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PictureService } from 'src/app/services/picture.service';
import { Picture } from 'src/app/shared/models/Pictures';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css']
})
export class PicturePageComponent implements OnInit {
  picture!: Picture;

  constructor(private pictureService: PictureService, private http: HttpClient) {}

  ngOnInit() {
    this.pictureService.findAll().subscribe(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      this.picture = data[randomIndex];
    });
  }

  getPictureUrl(): string {
    if (this.picture) {
      return `http://localhost:8080/api/pictures/${this.picture.id}`;
    }
    return '';
  }
}
