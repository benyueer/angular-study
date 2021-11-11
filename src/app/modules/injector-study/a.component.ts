import { Component } from "@angular/core";
import { MyAService } from "./a.service";

@Component({
  selector: 'my-comp-a',
  template: `
    <p>a component</p>
    <p>{{aSrv.data}}</p>
    <button (click)="clickHandler()">click</button>
  `,
  providers: [MyAService]
})
export class MyAComponent {
  constructor(public aSrv: MyAService) {}

  clickHandler() {
    this.aSrv.data = Math.random()
  }
}
