import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { lessonsData } from '../shared';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LessonsService {
  lessons = [];
  constructor(private http: Http) {
    this.loadLessons();
  }
  loadLessons() {
    this.http.get('/lessons')
      .map(res => res.json())
      .subscribe(
      lessonsData => this.lessons = lessonsData
      );
  }

}
