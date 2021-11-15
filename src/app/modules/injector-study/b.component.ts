import { Component } from "@angular/core";
import { MyAService, NumberService } from "./a.service";

@Component({
  selector: 'my-comp-b',
  template: `
    <p>b component</p>
    <p>{{aSrv.data}}</p>
  `,
  exportAs: 'bComp'
})
export class MyBComponent {
  constructor(public aSrv: MyAService, num: NumberService) {
    console.log(num)
  }
}
