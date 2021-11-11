import { Directive, forwardRef, Input } from "@angular/core";
import { MyFormGroup } from "../my_form_bulider";



@Directive({
  selector: '[myForm]',
})
export class MyFormDirective{
  @Input('myForm') form!: MyFormGroup
}

