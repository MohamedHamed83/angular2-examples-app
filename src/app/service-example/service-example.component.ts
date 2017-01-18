import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services';
@Component({
  selector: 'service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css'],
  providers: [LessonsService]
})
export class ServiceExampleComponent implements OnInit {

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
  }

}
