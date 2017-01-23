import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services';
import { Lesson } from '../services';
import { combineObservales } from '../services';

@Component({
  selector: 'observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css'],
  providers: [LessonsService]
})
export class ObservableExampleComponent implements OnInit {
  lessonsObservable: Observable<Lesson[]>;
  constructor(private lessonsService: LessonsService) {
    combineObservales();
    this.lessonsObservable = lessonsService.loadLessons();
  }

  ngOnInit() {
  }

}
