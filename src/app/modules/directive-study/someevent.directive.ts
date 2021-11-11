import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[event]',
  host: {
    '(click)':'onClick($event)',
    '[value]': '"eventdata"',
    '[class.bred]': 'true'
  }
})
export class SomeEventDirective {
  constructor(private elementRef: ElementRef) {}

  onClick(e: any) {
    alert('event')
  }
}
