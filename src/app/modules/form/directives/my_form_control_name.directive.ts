import { Directive, forwardRef, Host, Injector, Input, Optional, SkipSelf } from "@angular/core";
import { MyFormDirective } from "./my_form.directive";


@Directive({
  selector: '[myFormControlName]',
})
export class MyFormControlName {
  @Input('myFormControlName') myFormControlName!: string

  constructor(
    @Optional() @Host() @SkipSelf()private parent: MyFormDirective,
    private inject: Injector
    ) {
        // @ts-ignore
      if (!inject.qwq) {
        // @ts-ignore
        inject.qwe = Math.random()
      }
      console.log(inject)
      console.log(parent)
  }

}
