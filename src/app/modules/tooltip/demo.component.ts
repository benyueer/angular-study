import { Component, Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

@Component({
  selector: 'my-tooltip-demo',
  template: `
    <div *my-tooltip>123</div>
    <my-demo>demo</my-demo>
    <button nz-button>but</button>
  `
})
export class MyTooltipDemo{
  constructor(
    private elementRef: ElementRef,
    private hostView: ViewContainerRef,
    // private templateRef: TemplateRef<unknown>
  ) {
    console.log(elementRef, hostView)
  }
}

@Directive({
  selector: 'my-demo'
})
export class MyDemoDirective {
  constructor(
    private elementRef: ElementRef,
    private hostView: ViewContainerRef,
    // private templateRef: TemplateRef<unknown>
  ) {
    console.log(elementRef, hostView)
  }
}
