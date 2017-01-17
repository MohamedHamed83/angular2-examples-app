import { Component, OnInit } from '@angular/core';
import { Heros } from '../shared';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
  heroes= Heros;
  track(hero){
    return hero ? hero.id : undefined;
  }
  constructor() { }

  ngOnInit() {
  }

}
