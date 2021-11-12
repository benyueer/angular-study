import { Directive, forwardRef, Host, Injector, Input, Optional, SimpleChange, SkipSelf } from "@angular/core";
import { controlPath } from "../shared";
import { MyDefaultValueAccessorDirective } from "./my_deault_value_accessor.directive";
import { MyFormDirective } from "./my_form.directive";


@Directive({
  selector: '[myFormControlName]',
})
export class MyFormControlName {
  private _added = false
  control!: any

  @Input('myFormControlName') myFormControlName!: string

  constructor(
    @Optional() @Host() @SkipSelf() private parent: MyFormDirective,
    public myDefaultValueAccessorDirective: MyDefaultValueAccessorDirective
  ) {
  }

  get formDirective(): any {
    return this.parent ? this.parent.formDirective : null
  }

  private _setUoControl() {
    this.control = this.formDirective.addControl(this)
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('name change')
    if (!this._added) {
      this._added = true
      this._setUoControl()
    }
  }

  get path() {
    return controlPath(this.myFormControlName, this.parent)
  }

}
