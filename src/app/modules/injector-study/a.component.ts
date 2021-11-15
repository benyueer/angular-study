import { Component, Host, Inject, Optional, Self, SkipSelf } from "@angular/core";
import { MyAService, NumberService } from "./a.service";

@Component({
  selector: 'my-comp-a',
  template: `
    <p>a component</p>
    <p>{{aSrv.data}}</p>
    <button (click)="clickHandler()">click</button>
    <my-comp-b></my-comp-b>
  `,
  providers: [
    { provide: MyAService, useClass: MyAService },
    { provide: NumberService, useValue: { num: 321 } }
  ],
  viewProviders: [
    { provide: NumberService, useValue: { num: 345 } }
  ]
})
export class MyAComponent {
  constructor(
    @Inject(MyAService) public aSrv: MyAService,
    @Optional() @Host() num: NumberService
  ) {
    console.log(num)
  }

  clickHandler() {
    this.aSrv.data = Math.random()
  }
}
