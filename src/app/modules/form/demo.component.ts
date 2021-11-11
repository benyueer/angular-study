import { Component } from "@angular/core";
import { MyFormGroup } from "./my_form_bulider";

@Component({
  selector: 'my-form-demo',
  template: ``
})
export class MyFormDemoComponent {
  form!: MyFormGroup
  constructor(private myFormGroup: MyFormGroup) {
    this.form = new MyFormGroup({
      name: 'hello',
      age: 'world'
    })
  }
}
