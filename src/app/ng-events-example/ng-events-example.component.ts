import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-events-example',
  templateUrl: './ng-events-example.component.html',
  styleUrls: ['./ng-events-example.component.css']
})
export class NgEventsExampleComponent implements OnInit {

  onClick() {
alert('edre')
  }
  constructor() { }

  ngOnInit() {
  }

}
