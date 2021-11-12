import { Component, Inject } from "@angular/core";
import { MyAService } from "./a.service";

@Component({
  selector: 'my-comp-a',
  template: `
    <p>a component</p>
    <p>{{aSrv.data}}</p>
    <button (click)="clickHandler()">click</button>
  `,
  providers: [{provide: MyAService, useClass: MyAService}]
})
export class MyAComponent {
  constructor(@Inject(MyAService) public aSrv: MyAService) {
    console.log(aSrv)
  }

  clickHandler() {
    this.aSrv.data = Math.random()
  }
}
