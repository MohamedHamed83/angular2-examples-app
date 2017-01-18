import { Directive, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[collapse-on-click]',
  exportAs: 'collapsible'
})
export class CollapseOnClickDirective {

  @Input('collapsed')
  isCollaped = true;

  @Output('collapsed')
  collapsedOutput = new EventEmitter();

  get collaped() {
    return this.isCollaped;
  }
  @HostListener('click')
  toggle() {
    this.isCollaped = !this.isCollaped;
    this.collapsedOutput.emit(this.isCollaped);
  }
  constructor() { }

}
