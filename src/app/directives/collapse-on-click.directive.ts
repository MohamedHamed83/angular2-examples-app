import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[collapse-on-click]'
})
export class CollapseOnClickDirective {

  isCollaped = false;
  @HostBinding("class.collaped")
  get collaped() {
    return this.isCollaped;
  }
  @HostListener('click')
  toggle() {
    this.isCollaped = !this.isCollaped;
  }
  constructor() { }

}
