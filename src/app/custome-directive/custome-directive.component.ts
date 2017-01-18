import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custome-directive',
  templateUrl: './custome-directive.component.html',
  styleUrls: ['./custome-directive.component.css']
})
export class CustomeDirectiveComponent implements OnInit {

  constructor() { }
  onToggle(collapsed) {
    console.log(collapsed);
  }
  ngOnInit() {
  }

}
