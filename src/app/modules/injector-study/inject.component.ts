import { Component, InjectionToken, Inject, Self, Optional } from "@angular/core";
import { MyAService, NumberService } from "./a.service";

const DATA_INJECTOR = new InjectionToken<string>('data')

@Component({
  selector: 'my-inject',
  template: `
    <my-comp-b #bCom></my-comp-b>
    <my-comp-a>
    </my-comp-a>
    <my-comp-a></my-comp-a>
    <!-- <p>{{getName(bCom)}}</p> -->
  `,
  providers: [
    { provide: DATA_INJECTOR, useValue: 'inject data' },
    { provide: NumberService, useValue: {num: 123}}
  ]
})
export class MyInjectComponent {

  constructor(
    @Inject(DATA_INJECTOR) data: string,
    @Optional() @Self() srv: MyAService
  ) {
    console.log(srv)
  }

  getName(comp: any) {
    console.log(comp)
    return '123'
  }
}
