import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { LessonsService } from '../services';
import { Lesson } from '../services';
// import { combineObservales } from '../services';

@Component({
  selector: 'observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css'],
  providers: [LessonsService]
})
export class ObservableExampleComponent {
  lessonsObservable: Observable<Lesson[]>;
  constructor(private lessonsService: LessonsService) {
    // combineObservales();
    // this.lessonsObservable = lessonsService.loadflakylessons().retry();
    this.lessonsObservable = lessonsService.loadflakylessons().retryWhen(error => error.delay(5000));
  }
  saveLessons(description) {
    this.lessonsService.createLesson(description)
      .subscribe(
      () => {
        this.lessonsObservable = this.lessonsService.loadLessons();
        console.log('lesson save successfully');
      },
      err => console.error(err)
      );
  }
  // combin result example
  consecutiveReqs() {
    const deletFirst$ = this.lessonsService.deleteLesson(1);
    const deleteScond$ = this.lessonsService.deleteLesson(2);
    const reload = this.lessonsService.loadLessons();
    const combined$ = Observable.concat(
      deletFirst$,
      deleteScond$,
      reload
    );
    combined$.subscribe(
      () => { },
      () => { },
      () => {
        console.log('reload finished');
        this.lessonsObservable = reload;
      },
    );
  }
  // they will not be return in order second call can be return before the first
  parallelRequests() {
    const lessons$ = this.lessonsService.loadLessons();
    const moreLessons$ = this.lessonsService.loadLessons();
    const both$ = Observable.combineLatest(
      lessons$,
      moreLessons$);
    both$.subscribe(
      result => console.log(result),
      () => { },
      () => console.log('completed')
    )
  }
  requestChain() {
    const lesson = 'new lesson';
    const anotherlesson = 'another lesson';
    const chain$ = this.lessonsService.createLesson(lesson)
      .switchMap(result => this.lessonsService.createLesson(anotherlesson))
      .switchMap(() => this.lessonsService.loadLessons())
      .cache();
    this.lessonsObservable = chain$;
    chain$.subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('completed')
    );
  }
}
