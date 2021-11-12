import { Component, InjectionToken, Inject } from "@angular/core";

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
    {provide: DATA_INJECTOR, useValue: 'inject data'}
  ]
})
export class MyInjectComponent {

  constructor(@Inject(DATA_INJECTOR) data: string) {
    console.log(data)
  }

  getName(comp: any) {
    console.log(comp)
    return '123'
  }
}
