import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, Response } from '@angular/http';
import { xhrHeaders } from './xhr-headers';
import { Lesson } from './lesson';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class LessonsService {

  lessons = [];
  constructor(private http: Http) {
    this.loadLessons();
  }
  loadLessons(): Observable<Lesson[]> {
    return this.http.get('/api/lessons')
      .map((res: Response) => res.json());
  }
  createLesson(description) {
    const lesson = { description };
    this.lessons.push(lesson);
    this.http.post('/api/lessons', JSON.stringify(lesson), xhrHeaders())
      .subscribe(
      () => { },
      error => console.error(error)
      );
  }
  deleteLesson(lessonId) {
    const index = this.lessons.findIndex(lesson => lesson.id === lessonId);
    this.lessons.splice(index, 1);
    this.http.delete(`/api/lessons/${lessonId}`, xhrHeaders())
      .subscribe(
      () => { },
      err => console.error(err)
      );
  }
}
