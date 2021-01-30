import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhite]'
})
export class WhiteDirective {

  constructor(public el: ElementRef) {
 el.nativeElement.style.background = '#fff'
 }

}
