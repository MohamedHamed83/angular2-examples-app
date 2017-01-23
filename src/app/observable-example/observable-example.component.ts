import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services';
import { Lesson } from '../services';
@Component({
  selector: 'observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css'],
  providers: [LessonsService]
})
export class ObservableExampleComponent implements OnInit {
  lessonsArray: Lesson[];
  constructor(private lessonsService: LessonsService) {
    const lessons$ = lessonsService.loadLessons();
    lessons$.subscribe(
      (ls: Lesson[]) => this.lessonsArray = ls
    );
  }

  ngOnInit() {
  }

}
