import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[myFor]',
})
export class MyForDirective {
  @Input()
  set myForOf(list: any[]) {
    list.forEach((item, index, arr) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index,
        count: arr.length
      })
    })
  }

  constructor(private templateRef: TemplateRef<unknown>, private viewContainer: ViewContainerRef) {}
}
