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
    this.lessonsObservable = lessonsService.loadLessons().cache();
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
}
