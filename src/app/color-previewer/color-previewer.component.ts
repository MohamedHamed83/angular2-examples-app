import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-previewer',
  templateUrl: './color-previewer.component.html',
  styleUrls: ['./color-previewer.component.css']
})
export class ColorPreviewerComponent {
  @Input()
  color: string;
  constructor() { }

}
