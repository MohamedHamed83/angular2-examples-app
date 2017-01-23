import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services';
import { initLessonsObservable } from '../shared/observable.service';

@Component({
  selector: 'service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css'],
  providers: [LessonsService]
})
export class ServiceExampleComponent implements OnInit {

  constructor(private lessonsService: LessonsService) {
    initLessonsObservable();
  }

  ngOnInit() {
  }

}
