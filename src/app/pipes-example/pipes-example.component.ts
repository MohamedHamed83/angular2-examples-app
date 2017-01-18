import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  message = 'Test Pipes';
  testDate: Date = new Date();
  piNumber = 3.1415263748;
  amount = 12.3242;
  data = ['a', 'b', 'c', 'd', 'e', 'f']
  constructor() { }

  ngOnInit() {
  }

}
