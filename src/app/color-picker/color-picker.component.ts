import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BLUE, RED } from '../shared';
@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  @Input()
  color: string;

  @Output("color")
  colorOutput = new EventEmitter();

  choose(color) {
    this.color = color;
    this.colorOutput.emit(color);
  }
  reset() {
    this.choose('black');
  }
}
