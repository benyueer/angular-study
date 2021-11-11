import { Component, ContentChild, ElementRef, Input, TemplateRef } from "@angular/core";

@Component({
  selector: 'my-outlet-a',
  template: `
    <p>content</p>
    <my-outlet-b [temp]="temp"></my-outlet-b>
    <ng-template #temp let-value let-name=name>{{value}}-{{name}}</ng-template>

    <div *myFor="let item of list; let i=index">{{item}}-{{i}}</div>
    <ng-template myFor [myForOf]="list" let-i=index let-item>
      <div>{{item}}-{{i}}</div>
    </ng-template>


  `
})
export class MyOutletAComponent {
  list=['name1', 'hello', 'world']
}

@Component({
  selector: 'my-outlet-b',
  template: `
  <ng-container *ngTemplateOutlet="temp context: context"></ng-container>

  <!-- <ng-template #temp let-value let-name=name>{{value}}-{{name}}</ng-template> -->


  `
})
export class MyOutletBComponent {
    context = {$implicit: 1122, name: 'hello'}

    @Input() temp!: TemplateRef<unknown>
}
