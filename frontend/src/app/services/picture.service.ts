import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../shared/models/Pictures';


@Injectable()

export class PictureService {
  private picturesUrl: string;

  constructor(private http:HttpClient) {
    this.picturesUrl='http://localhost:8080/api/pictures';
  }

  public findAll(): Observable<Picture[]>{
    return this.http.get<Picture[]>(this.picturesUrl);
  }

}
