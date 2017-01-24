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
  // loadLessons(): Observable<Lesson[]> {
  //   return this.http.get('/api/lessons')
  //     .map((res: Response) => res.json());
  // }
  loadLessons(search = ''): Observable<Lesson[]> {
    console.log(`searching for ${search}`);
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('/api/lessons', {search: params}).map(res => res.json());
  }
  loadDelayedlessons(): Observable<Lesson[]> {
    return this.http.get('/api/delayedlessons')
      .map((res: Response) => res.json());
  }
  loadflakylessons(): Observable<Lesson[]> {
    return this.http.get('/api/flakylessons')
      .map((res: Response) => res.json());
  }
  createLesson(description) {
    const lesson = { description };
    this.lessons.push(lesson);
    const postLesson$ = this.http.post('/api/lessons', JSON.stringify(lesson), xhrHeaders())
      // each subscribe will do serpert call to avoid that we need to call cache()
      .cache();
    postLesson$.subscribe(
      () => console.log(description),
      error => console.error(error)
    );
    return postLesson$;
  }
  deleteLesson(lessonId) {
    return this.http.delete(`/api/lessons/${lessonId}`, xhrHeaders());
  }
}
