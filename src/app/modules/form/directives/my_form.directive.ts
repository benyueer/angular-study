import { Directive, forwardRef, Input } from "@angular/core";
import { MyFormGroup } from "../my_form_bulider";
import { setUpControl } from "../shared";
import { MyFormControlName } from "./my_form_control_name.directive";



@Directive({
  selector: '[myForm]',
})
export class MyFormDirective{
  @Input('myForm') form!: MyFormGroup

  addControl(dir: MyFormControlName) {
    const ctrl = this.form.get(dir.path)
    setUpControl(ctrl, dir)
    return ctrl
  }

  get formDirective() {
    return this
  }

  get path() {
    return []
  }
}

