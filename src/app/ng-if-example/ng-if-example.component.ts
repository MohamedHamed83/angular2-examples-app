import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {
  show = true;
  hidden = false;
  toggleShow() {
    this.show = !this.show;
  }
  toggleHidden() {
    this.hidden = !this.hidden;
  }
  ngOnInit() {
  }

}
